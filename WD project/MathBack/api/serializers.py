from rest_framework import serializers

from api.models import Grade, Quiz, Question, Variant


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = '__all__'


class QuizSerializer(serializers.ModelSerializer):
    grade = GradeSerializer()

    class Meta:
        model = Quiz
        fields = '__all__'


class VariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variant
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    variants = VariantSerializer(many=True)

    class Meta:
        model = Question
        fields = '__all__'


class SingleQuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = '__all__'
