from django.contrib import admin

from project_auth.models import User


# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'name', 'date_joined')
    list_display_links = ('username',)
    list_filter = ('date_joined',)
    search_fields = ('username',)