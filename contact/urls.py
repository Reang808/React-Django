from django.urls import path
from . import views

app_name = 'contact'

urlpatterns = [
    # お問い合わせ作成API（フロントエンド用）
    path('api/contact/', views.contact_create, name='contact_create'),
    
    # 管理者用API
    path('api/contacts/', views.contact_list, name='contact_list'),
    path('api/contacts/<int:pk>/', views.contact_detail, name='contact_detail'),
    path('api/contacts/<int:pk>/reply/', views.contact_reply, name='contact_reply'),
]