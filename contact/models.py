from django.db import models
from django.utils import timezone


class Contact(models.Model):
    """
    お問い合わせモデル
    """
    name = models.CharField(
        max_length=100, 
        verbose_name="お名前",
        help_text="お名前を入力してください"
    )
    email = models.EmailField(
        verbose_name="メールアドレス",
        help_text="メールアドレスを入力してください"
    )
    message = models.TextField(
        verbose_name="お問い合わせ内容",
        help_text="お問い合わせ内容を入力してください"
    )
    created_at = models.DateTimeField(
        default=timezone.now,
        verbose_name="作成日時"
    )
    is_replied = models.BooleanField(
        default=False,
        verbose_name="返信済み",
        help_text="返信が完了した場合にチェックしてください"
    )

    class Meta:
        verbose_name = "お問い合わせ"
        verbose_name_plural = "お問い合わせ一覧"
        ordering = ['-created_at']  # 新しい順で表示

    def __str__(self):
        return f"{self.name} - {self.email} ({self.created_at.strftime('%Y-%m-%d %H:%M')})"
