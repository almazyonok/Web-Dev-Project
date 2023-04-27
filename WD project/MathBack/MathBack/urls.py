from django.contrib import admin
from django.urls import path, include
from project_auth.urls import urlpatterns as auth_urls
from api.urls import urlpatterns as api_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api_urls)),
    path('auth/', include(auth_urls)),
]
