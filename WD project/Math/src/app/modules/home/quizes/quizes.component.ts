import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../../core/services/quiz.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss']
})
export class QuizesComponent implements OnInit {
  quizes: any = [1, 1, 1, 1, 1];
  gradeId = this.activatedRoute.snapshot.params['grade']

  constructor(private quizService: QuizService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getQuizesByGrade()
  }

  getQuizesByGrade() {
    this.quizService.getQuizesByGrade(this.gradeId).subscribe(res => {
      this.quizes = res
    })
  }

  getTitle() {
    return this.quizes[0].grade.name
  }

  goToQuiz(quiz: any) {
    this.router.navigate([`grades/${this.gradeId}/quizes/` + quiz.id])
  }

  goAddQuiz() {
    this.router.navigate([`grades/${this.gradeId}/add_quiz`])
  }

  isTeacher() {
    if (localStorage.getItem('role') === "Teacher") {
      return true
    } else {
      return false
    }
  }
}
