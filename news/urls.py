from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'news'

# DRF ViewSets用のルーター
router = DefaultRouter()
router.register(r'articles', views.ArticleViewSet, basename='article')
router.register(r'categories', views.CategoryViewSet, basename='category')

urlpatterns = [
    # REST API エンドポイント
    path('', include(router.urls)),
    
    # カスタムエンドポイント
    path('featured/', views.FeaturedArticlesView.as_view(), name='featured-articles'),
]