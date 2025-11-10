from django.contrib import admin
from django.utils.html import format_html
from django import forms
from .models import Category, Article


class CategoryAdminForm(forms.ModelForm):
    """カテゴリー管理用のカスタムフォーム"""
    
    class Meta:
        model = Category
        fields = '__all__'
        widgets = {
            'description': forms.Textarea(attrs={
                'rows': 4,
                'cols': 80,
                'style': 'width: 100%;'
            }),
        }


class ArticleAdminForm(forms.ModelForm):
    """記事管理用のカスタムフォーム"""
    
    class Meta:
        model = Article
        fields = '__all__'
        widgets = {
            'excerpt': forms.Textarea(attrs={
                'rows': 4,
                'cols': 80,
                'style': 'width: 100%; font-family: monospace;'
            }),
            'content': forms.Textarea(attrs={
                'rows': 20,
                'cols': 100,
                'style': 'width: 100%; font-family: monospace; font-size: 14px;'
            }),
            'meta_description': forms.Textarea(attrs={
                'rows': 3,
                'cols': 80,
                'style': 'width: 100%;'
            }),
        }


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    form = CategoryAdminForm
    list_display = ('name', 'slug', 'created_at', 'article_count')
    list_filter = ('created_at',)
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}
    readonly_fields = ('created_at',)
    
    def article_count(self, obj):
        """このカテゴリーの記事数を表示"""
        return obj.articles.count()
    article_count.short_description = '記事数'


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    form = ArticleAdminForm
    list_display = (
        'title', 
        'category', 
        'status', 
        'is_featured', 
        'published_at', 
        'created_at',
        'image_preview'
    )
    list_filter = (
        'status', 
        'category', 
        'is_featured', 
        'created_at', 
        'published_at'
    )
    search_fields = ('title', 'excerpt', 'content')
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('created_at', 'updated_at', 'image_preview')
    date_hierarchy = 'published_at'
    
    # フィールドの表示順序
    fieldsets = (
        ('基本情報', {
            'fields': ('title', 'slug', 'category', 'status', 'is_featured')
        }),
        ('コンテンツ', {
            'fields': ('excerpt', 'content', 'featured_image', 'image_preview')
        }),
        ('公開設定', {
            'fields': ('published_at',)
        }),
        ('SEO設定', {
            'fields': ('meta_title', 'meta_description'),
            'classes': ('collapse',)  # 折りたたみ可能
        }),
        ('システム情報', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    # 管理画面での並び順
    ordering = ('-created_at',)
    
    # 一括アクション
    actions = ['make_published', 'make_draft', 'make_featured']
    
    def image_preview(self, obj):
        """管理画面で画像のプレビューを表示"""
        if obj.featured_image:
            return format_html(
                '<img src="{}" style="width: 100px; height: auto;" />',
                obj.featured_image.url
            )
        return "画像なし"
    image_preview.short_description = '画像プレビュー'
    
    def make_published(self, request, queryset):
        """記事を公開状態にする"""
        updated = queryset.update(status='published')
        self.message_user(request, f'{updated}件の記事を公開しました。')
    make_published.short_description = "選択した記事を公開する"
    
    def make_draft(self, request, queryset):
        """記事を下書き状態にする"""
        updated = queryset.update(status='draft')
        self.message_user(request, f'{updated}件の記事を下書きにしました。')
    make_draft.short_description = "選択した記事を下書きにする"
    
    def make_featured(self, request, queryset):
        """記事を注目記事にする"""
        updated = queryset.update(is_featured=True)
        self.message_user(request, f'{updated}件の記事を注目記事にしました。')
    make_featured.short_description = "選択した記事を注目記事にする"
    
    class Media:
        """管理画面用のCSS/JSを追加（必要に応じて）"""
        css = {
            'all': ('admin/css/custom_admin.css',)
        }


# 管理画面のカスタマイズ
admin.site.site_header = 'Reang News 管理'
admin.site.site_title = 'News Admin'
admin.site.index_title = 'ニュース記事管理'
