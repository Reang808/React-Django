from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    """
    お問い合わせ管理画面
    """
    list_display = ['name', 'email', 'is_replied', 'created_at']
    list_filter = ['is_replied', 'created_at']
    search_fields = ['name', 'email', 'message']
    readonly_fields = ['created_at']
    list_editable = ['is_replied']
    
    fieldsets = (
        ('お問い合わせ情報', {
            'fields': ('name', 'email', 'message')
        }),
        ('管理情報', {
            'fields': ('is_replied', 'created_at')
        }),
    )
    
    def get_queryset(self, request):
        """新しい順で表示"""
        return super().get_queryset(request).order_by('-created_at')
