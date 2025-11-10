from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django.urls import reverse


class Category(models.Model):
    """ニュース記事のカテゴリー"""
    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name="カテゴリー名"
    )
    slug = models.SlugField(
        max_length=100,
        unique=True,
        blank=True,
        verbose_name="URL用スラッグ"
    )
    description = models.TextField(
        blank=True,
        verbose_name="説明"
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="作成日時"
    )
    
    class Meta:
        verbose_name = "カテゴリー"
        verbose_name_plural = "カテゴリー"
        ordering = ['name']
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class Article(models.Model):
    """ニュース記事"""
    
    STATUS_CHOICES = [
        ('draft', '下書き'),
        ('published', '公開'),
        ('archived', 'アーカイブ'),
    ]
    
    title = models.CharField(
        max_length=200,
        verbose_name="タイトル"
    )
    slug = models.SlugField(
        max_length=200,
        unique=True,
        blank=True,
        verbose_name="URL用スラッグ"
    )
    excerpt = models.TextField(
        max_length=500,
        verbose_name="要約・抜粋",
        help_text="記事の概要を500文字以内で入力してください"
    )
    content = models.TextField(
        verbose_name="本文"
    )
    featured_image = models.ImageField(
        upload_to='news_images/%Y/%m/',
        blank=True,
        null=True,
        verbose_name="アイキャッチ画像"
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='articles',
        verbose_name="カテゴリー"
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='draft',
        verbose_name="ステータス"
    )
    is_featured = models.BooleanField(
        default=False,
        verbose_name="注目記事",
        help_text="チェックすると注目記事として表示されます"
    )
    published_at = models.DateTimeField(
        blank=True,
        null=True,
        verbose_name="公開日時"
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="作成日時"
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="更新日時"
    )
    
    # SEO関連
    meta_title = models.CharField(
        max_length=60,
        blank=True,
        verbose_name="SEOタイトル",
        help_text="検索エンジン向けタイトル（60文字以内）"
    )
    meta_description = models.CharField(
        max_length=160,
        blank=True,
        verbose_name="SEO説明文",
        help_text="検索エンジン向け説明文（160文字以内）"
    )
    
    class Meta:
        verbose_name = "記事"
        verbose_name_plural = "記事"
        ordering = ['-published_at', '-created_at']
        indexes = [
            models.Index(fields=['status', 'published_at']),
            models.Index(fields=['category', 'status']),
            models.Index(fields=['slug']),
        ]
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        # スラッグの自動生成
        if not self.slug:
            base_slug = slugify(self.title)
            slug = base_slug
            counter = 1
            while Article.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        
        # 公開日時の自動設定
        if self.status == 'published' and not self.published_at:
            self.published_at = timezone.now()
        elif self.status != 'published':
            self.published_at = None
        
        # SEOフィールドの自動設定
        if not self.meta_title:
            self.meta_title = self.title[:60]
        if not self.meta_description:
            self.meta_description = self.excerpt[:160]
        
        super().save(*args, **kwargs)
    
    def get_absolute_url(self):
        """記事の詳細URLを返す"""
        return reverse('news:article_detail', kwargs={'slug': self.slug})
    
    @property
    def is_published(self):
        """記事が公開されているかどうか"""
        return (
            self.status == 'published' and
            self.published_at and
            self.published_at <= timezone.now()
        )
    
    @classmethod
    def published_articles(cls):
        """公開されている記事のQuerySet"""
        return cls.objects.filter(
            status='published',
            published_at__lte=timezone.now()
        )
    
    @classmethod
    def featured_articles(cls, limit=3):
        """注目記事を取得"""
        return cls.published_articles().filter(
            is_featured=True
        )[:limit]
