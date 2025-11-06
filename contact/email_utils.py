from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags
import logging

logger = logging.getLogger(__name__)


def send_contact_notification(contact_instance):
    """
    お問い合わせ通知メールを送信する
    
    Args:
        contact_instance: Contactモデルのインスタンス
        
    Returns:
        bool: 送信成功時True、失敗時False
    """
    try:
        # メール件名
        subject = f'【お問い合わせ通知】{contact_instance.name}様からのお問い合わせ'
        
        # メール本文を作成
        message_content = f"""
新しいお問い合わせが届きました。

【お問い合わせ詳細】
お名前: {contact_instance.name}
メールアドレス: {contact_instance.email}
送信日時: {contact_instance.created_at.strftime('%Y年%m月%d日 %H:%M')}

【お問い合わせ内容】
{contact_instance.message}

---------------------
このメールは自動送信されています。
お問い合わせの管理は以下のURLから行えます：
http://127.0.0.1:8000/admin/contact/contact/

※返信が必要な場合は、お客様のメールアドレス（{contact_instance.email}）まで直接ご連絡ください。
"""
        
        # メール送信
        send_mail(
            subject=subject,
            message=message_content,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_EMAIL],
            fail_silently=False,
        )
        
        logger.info(f'お問い合わせ通知メールを送信しました: {contact_instance.email} -> {settings.CONTACT_EMAIL}')
        return True
        
    except Exception as e:
        logger.error(f'お問い合わせ通知メールの送信に失敗しました: {str(e)}')
        return False


def send_contact_confirmation(contact_instance):
    """
    お問い合わせ確認メールを送信する（お客様向け）
    
    Args:
        contact_instance: Contactモデルのインスタンス
        
    Returns:
        bool: 送信成功時True、失敗時False
    """
    try:
        # メール件名
        subject = 'お問い合わせありがとうございます - REANG'
        
        # メール本文を作成
        message_content = f"""
{contact_instance.name} 様

この度は、REANGにお問い合わせいただきありがとうございます。
以下の内容でお問い合わせを受け付けいたしました。

【受付内容】
お名前: {contact_instance.name}
メールアドレス: {contact_instance.email}
受付日時: {contact_instance.created_at.strftime('%Y年%m月%d日 %H:%M')}

【お問い合わせ内容】
{contact_instance.message}

内容を確認の上、営業時間内（平日9:00-18:00）にご返信させていただきます。
お急ぎの場合は、お電話（080-8636-3296）でもお受けしております。

今後ともREANGをよろしくお願いいたします。

---------------------
株式会社REANG
Email: info@reang.jp
Tel: 080-8636-3296

※このメールは自動送信されています。
　このメールに直接ご返信いただいても対応できませんのでご注意ください。
"""
        
        # メール送信
        send_mail(
            subject=subject,
            message=message_content,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[contact_instance.email],
            fail_silently=False,
        )
        
        logger.info(f'お問い合わせ確認メールを送信しました: {settings.DEFAULT_FROM_EMAIL} -> {contact_instance.email}')
        return True
        
    except Exception as e:
        logger.error(f'お問い合わせ確認メールの送信に失敗しました: {str(e)}')
        return False