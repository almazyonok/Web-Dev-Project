import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class QuizService {


  constructor(private http: HttpClient) {
  }

  getGrades() {
    return this.http.get(BASE_URL + 'api/grades')
  }

  getQuizesByGrade(gradeId: number) {
    return this.http.get(BASE_URL + `api/grades/${gradeId}/quizes`)
  }

  getQuizInfo(quizId: number) {
    return this.http.get(BASE_URL + `api/quizes/` + quizId)
  }

  addQuiz(gradeId: number, data: any) {
    return this.http.post(BASE_URL + `api/grades/${gradeId}/quizes`, data)
  }
}
