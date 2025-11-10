from django.utils import timezone
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.db.models import Q
from .models import Article, Category
from .serializers import (
    ArticleListSerializer, 
    ArticleDetailSerializer,
    ArticleCreateUpdateSerializer,
    CategorySerializer
)


class CategoryViewSet(viewsets.ModelViewSet):
    """カテゴリーのCRUD操作"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def get_queryset(self):
        """クエリセットをカスタマイズ"""
        queryset = Category.objects.all()
        
        # 名前での検索
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) | Q(description__icontains=search)
            )
        
        return queryset.order_by('name')


class ArticleViewSet(viewsets.ModelViewSet):
    """記事のCRUD操作"""
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def get_queryset(self):
        """クエリセットをカスタマイズ"""
        # 管理者でない場合は公開記事のみ表示
        if not self.request.user.is_staff:
            queryset = Article.published_articles()
        else:
            queryset = Article.objects.all()
        
        # カテゴリーでのフィルタリング
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category__slug=category)
        
        # ステータスでのフィルタリング（管理者のみ）
        if self.request.user.is_staff:
            status_filter = self.request.query_params.get('status', None)
            if status_filter:
                queryset = queryset.filter(status=status_filter)
        
        # 検索機能
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) | 
                Q(excerpt__icontains=search) | 
                Q(content__icontains=search)
            )
        
        # 注目記事のフィルタリング
        featured = self.request.query_params.get('featured', None)
        if featured and featured.lower() == 'true':
            queryset = queryset.filter(is_featured=True)
        
        return queryset.order_by('-published_at', '-created_at')
    
    def get_serializer_class(self):
        """アクションに応じてシリアライザーを切り替え"""
        if self.action == 'retrieve':
            return ArticleDetailSerializer
        elif self.action in ['create', 'update', 'partial_update']:
            return ArticleCreateUpdateSerializer
        return ArticleListSerializer
    
    def perform_create(self, serializer):
        """記事作成時の処理"""
        serializer.save()
    
    def perform_update(self, serializer):
        """記事更新時の処理"""
        serializer.save()
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """注目記事を取得"""
        articles = self.get_queryset().filter(is_featured=True)[:3]
        serializer = ArticleListSerializer(
            articles, 
            many=True, 
            context={'request': request}
        )
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def latest(self, request):
        """最新記事を取得"""
        limit = int(request.query_params.get('limit', 5))
        articles = self.get_queryset()[:limit]
        serializer = ArticleListSerializer(
            articles, 
            many=True, 
            context={'request': request}
        )
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """カテゴリー別の記事を取得"""
        category_slug = request.query_params.get('category')
        if not category_slug:
            return Response(
                {'error': 'category パラメータが必要です'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            category = Category.objects.get(slug=category_slug)
        except Category.DoesNotExist:
            return Response(
                {'error': 'カテゴリーが見つかりません'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        articles = self.get_queryset().filter(category=category)
        serializer = ArticleListSerializer(
            articles, 
            many=True, 
            context={'request': request}
        )
        return Response({
            'category': CategorySerializer(category).data,
            'articles': serializer.data
        })


class FeaturedArticlesView(APIView):
    """注目記事を取得するビュー"""
    
    def get(self, request):
        """注目記事のリストを返す"""
        limit = int(request.query_params.get('limit', 3))
        articles = Article.featured_articles(limit=limit)
        serializer = ArticleListSerializer(
            articles, 
            many=True, 
            context={'request': request}
        )
        
        return Response({
            'count': articles.count(),
            'results': serializer.data
        })
