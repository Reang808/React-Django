from rest_framework import serializers
from .models import Article, Category


class CategorySerializer(serializers.ModelSerializer):
    """カテゴリーのシリアライザー"""
    article_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'created_at', 'article_count']
        read_only_fields = ['id', 'created_at', 'article_count']
    
    def get_article_count(self, obj):
        """このカテゴリーの公開記事数を返す"""
        return obj.articles.filter(status='published').count()


class ArticleListSerializer(serializers.ModelSerializer):
    """記事一覧用のシリアライザー（詳細は含まない）"""
    category = CategorySerializer(read_only=True)
    featured_image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Article
        fields = [
            'id', 'title', 'slug', 'excerpt', 'category',
            'featured_image_url', 'is_featured', 'published_at',
            'meta_title', 'meta_description'
        ]
    
    def get_featured_image_url(self, obj):
        """アイキャッチ画像のフルURLを返す"""
        if obj.featured_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.featured_image.url)
            return obj.featured_image.url
        return None


class ArticleDetailSerializer(serializers.ModelSerializer):
    """記事詳細用のシリアライザー（全フィールドを含む）"""
    category = CategorySerializer(read_only=True)
    featured_image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Article
        fields = [
            'id', 'title', 'slug', 'excerpt', 'content',
            'category', 'featured_image_url', 'is_featured',
            'published_at', 'created_at', 'updated_at',
            'meta_title', 'meta_description'
        ]
    
    def get_featured_image_url(self, obj):
        """アイキャッチ画像のフルURLを返す"""
        if obj.featured_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.featured_image.url)
            return obj.featured_image.url
        return None


class ArticleCreateUpdateSerializer(serializers.ModelSerializer):
    """記事作成・更新用のシリアライザー"""
    
    class Meta:
        model = Article
        fields = [
            'title', 'slug', 'excerpt', 'content',
            'featured_image', 'category', 'status', 'is_featured',
            'published_at', 'meta_title', 'meta_description'
        ]
        extra_kwargs = {
            'slug': {'required': False},  # スラッグは自動生成可能
        }
    
    def validate_title(self, value):
        """タイトルのバリデーション"""
        if len(value.strip()) < 5:
            raise serializers.ValidationError("タイトルは5文字以上で入力してください。")
        return value
    
    def validate_excerpt(self, value):
        """要約のバリデーション"""
        if len(value.strip()) < 20:
            raise serializers.ValidationError("要約は20文字以上で入力してください。")
        return value