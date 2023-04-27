from django.contrib import admin

from api.models import Grade, Quiz, Question, Variant


# Register your models here.
@admin.register(Grade)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_display_links = ('name',)
    list_filter = ('name',)
    search_fields = ('name',)


@admin.register(Quiz)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('name', 'author', 'grade')
    list_display_links = ('name',)
    list_filter = ('name',)
    search_fields = ('name',)


@admin.register(Question)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('description', 'quiz',)
    list_display_links = ('quiz',)
    list_filter = ('quiz',)
    search_fields = ('quiz',)


@admin.register(Variant)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('text', 'question', 'right')
    list_display_links = ('text',)
    list_filter = ('text',)
    search_fields = ('text',)
