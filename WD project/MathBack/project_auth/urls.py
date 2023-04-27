from django.urls import path

from project_auth.views import RegisterView, UserView
from rest_framework.authtoken import views

urlpatterns = [
    path('register', RegisterView.as_view(), name='register'),
    path('login', views.obtain_auth_token, name='login'),
    path('user', UserView.as_view(), name='user'),
]
