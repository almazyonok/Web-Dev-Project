from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from project_auth.serializers import UserSerializer


# Create your views here.
class RegisterView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({
            'message': 'Успешно зарегестрированы'
        })


class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        token = request.META['HTTP_AUTHORIZATION'].split()
        user = Token.objects.get(key=token[1]).user
        user_serializer = UserSerializer(user)
        return Response(user_serializer.data)
