from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactCreateSerializer, ContactSerializer
from .email_utils import send_contact_notification, send_contact_confirmation
import logging

logger = logging.getLogger(__name__)


@api_view(['POST'])
def contact_create(request):
    """
    お問い合わせフォーム作成API
    """
    if request.method == 'POST':
        serializer = ContactCreateSerializer(data=request.data)
        if serializer.is_valid():
            try:
                # お問い合わせを保存
                contact = serializer.save()
                
                # メール送信（非同期的に実行して、失敗してもレスポンスには影響させない）
                notification_sent = send_contact_notification(contact)
                confirmation_sent = send_contact_confirmation(contact)
                
                # ログに記録
                if notification_sent:
                    logger.info(f'通知メール送信成功: Contact ID {contact.id}')
                else:
                    logger.warning(f'通知メール送信失敗: Contact ID {contact.id}')
                    
                if confirmation_sent:
                    logger.info(f'確認メール送信成功: Contact ID {contact.id}')
                else:
                    logger.warning(f'確認メール送信失敗: Contact ID {contact.id}')
                
                # 作成されたデータを返す
                response_serializer = ContactSerializer(contact)
                
                # メール送信結果に関わらず、お問い合わせの保存は成功として返す
                message = 'お問い合わせを受け付けました。ありがとうございます。'
                if confirmation_sent:
                    message += '\n確認メールをお送りしましたので、ご確認ください。'
                else:
                    message += '\n※確認メールの送信に失敗しましたが、お問い合わせは正常に受け付けられています。'
                
                return Response({
                    'success': True,
                    'message': message,
                    'data': response_serializer.data,
                    'email_status': {
                        'notification_sent': notification_sent,
                        'confirmation_sent': confirmation_sent
                    }
                }, status=status.HTTP_201_CREATED)
                
            except Exception as e:
                logger.error(f'お問い合わせ保存エラー: {str(e)}')
                return Response({
                    'success': False,
                    'message': 'サーバーエラーが発生しました。しばらく時間をおいてから再度お試しください。',
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({
                'success': False,
                'message': '入力内容に不備があります。',
                'errors': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def contact_list(request):
    """
    お問い合わせ一覧取得API（管理者用）
    """
    contacts = Contact.objects.all()
    serializer = ContactSerializer(contacts, many=True)
    return Response({
        'success': True,
        'data': serializer.data
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def contact_detail(request, pk):
    """
    お問い合わせ詳細取得API（管理者用）
    """
    try:
        contact = Contact.objects.get(pk=pk)
        serializer = ContactSerializer(contact)
        return Response({
            'success': True,
            'data': serializer.data
        }, status=status.HTTP_200_OK)
    except Contact.DoesNotExist:
        return Response({
            'success': False,
            'message': 'お問い合わせが見つかりません。'
        }, status=status.HTTP_404_NOT_FOUND)


@api_view(['PATCH'])
def contact_reply(request, pk):
    """
    お問い合わせ返信済みマーク API（管理者用）
    """
    try:
        contact = Contact.objects.get(pk=pk)
        contact.is_replied = True
        contact.save()
        serializer = ContactSerializer(contact)
        return Response({
            'success': True,
            'message': '返信済みとしてマークしました。',
            'data': serializer.data
        }, status=status.HTTP_200_OK)
    except Contact.DoesNotExist:
        return Response({
            'success': False,
            'message': 'お問い合わせが見つかりません。'
        }, status=status.HTTP_404_NOT_FOUND)
