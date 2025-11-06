from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
    """
    お問い合わせ用シリアライザー
    """
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'message', 'created_at', 'is_replied']
        read_only_fields = ['id', 'created_at', 'is_replied']
        
    def validate_name(self, value):
        """
        名前のバリデーション
        """
        if not value.strip():
            raise serializers.ValidationError("名前を入力してください。")
        return value.strip()
    
    def validate_email(self, value):
        """
        メールアドレスのバリデーション
        """
        if not value.strip():
            raise serializers.ValidationError("メールアドレスを入力してください。")
        return value.strip()
    
    def validate_message(self, value):
        """
        メッセージのバリデーション
        """
        if not value.strip():
            raise serializers.ValidationError("お問い合わせ内容を入力してください。")
        return value.strip()


class ContactCreateSerializer(serializers.ModelSerializer):
    """
    お問い合わせ作成用シリアライザー（フロントエンド用）
    """
    class Meta:
        model = Contact
        fields = ['name', 'email', 'message']
        
    def validate_name(self, value):
        """
        名前のバリデーション
        """
        if not value.strip():
            raise serializers.ValidationError("名前を入力してください。")
        return value.strip()
    
    def validate_email(self, value):
        """
        メールアドレスのバリデーション
        """
        if not value.strip():
            raise serializers.ValidationError("メールアドレスを入力してください。")
        return value.strip()
    
    def validate_message(self, value):
        """
        メッセージのバリデーション
        """
        if not value.strip():
            raise serializers.ValidationError("お問い合わせ内容を入力してください。")
        return value.strip()