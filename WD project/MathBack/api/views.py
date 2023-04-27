import json

from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Grade, Quiz, Question, Variant
from api.serializers import GradeSerializer, QuestionSerializer, QuizSerializer, SingleQuizSerializer
from rest_framework import status


# Create your views here.
class GradesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        grades = Grade.objects.all()
        serializer = GradeSerializer(grades, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = GradeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data)

    def put(self, request, grade_id):
        grade = Grade.objects.filter(id=grade_id).first()
        serializer = GradeSerializer(grade, data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response({'msg': 'updated'}, status=status.HTTP_200_OK)
        else:
            return serializer.errors

    def delete(self, request, grade_id):
        grade = Grade.objects.filter(id=grade_id).first()
        grade.delete()
        return Response({'msg': 'deleted'}, status=status.HTTP_200_OK)


class QuizesOfGradeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, grade_id):
        quizes = Quiz.objects.filter(grade_id=grade_id)
        serializer = QuizSerializer(quizes, many=True)
        return Response(serializer.data)

    def post(self, request, grade_id):
        token = request.META['HTTP_AUTHORIZATION'].split()
        user = Token.objects.get(key=token[1]).user
        quiz = json.loads(request.body.decode('utf-8'))
        grade = Grade.objects.get(id=grade_id)
        quiz_obj = Quiz(name=quiz['name'], description=quiz['description'], author=user.name, grade=grade)
        quiz_obj.save()
        for question in quiz['questions']:
            question_obj = Question(description=question['description'])
            question_obj.save()

            for variant in question['variants']:
                variant_obj = Variant(text=variant['text'], right=variant['right'])
                variant_obj.save()
                question_obj.variants.add(variant_obj)

            quiz_obj.questions.add(question_obj)
        return Response(status=status.HTTP_200_OK)


class QuizInfo(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, quiz_id):
        quiz = Quiz.objects.filter(id=quiz_id).first()
        serializer = SingleQuizSerializer(quiz)
        return Response(serializer.data)
