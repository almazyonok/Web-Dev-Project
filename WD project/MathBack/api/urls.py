from django.urls import path

from api.views import GradesView, QuizesOfGradeView, QuizInfo

urlpatterns = [
    path('grades', GradesView.as_view(), name='register'),
    path('grades/<int:grade_id>/quizes', QuizesOfGradeView.as_view(), name='quizes_of_grade'),
    path('quizes/<int:quiz_id>', QuizInfo.as_view(), name='quiz_info'),
    path('grades/<int:grade_id>', GradesView.as_view())
]
