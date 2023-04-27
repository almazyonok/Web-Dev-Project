from django.db import models


class Grade(models.Model):
    name = models.CharField(max_length=255)


class Variant(models.Model):
    text = models.CharField(max_length=255)
    right = models.BooleanField(default=False)


class Question(models.Model):
    description = models.CharField(max_length=500)
    variants = models.ManyToManyField(Variant, blank=True, null=True)


class Quiz(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=500, blank=True, null=True)
    author = models.CharField(max_length=255)
    grade = models.ForeignKey(Grade, on_delete=models.CASCADE, blank=True, null=True)
    questions = models.ManyToManyField(Question, blank=True, null=True)
