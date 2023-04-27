import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../../core/services/quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  grades: any = [];

  constructor(private quizService: QuizService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getGrades()
  }

  navigateToQuizes(grade: any) {
    this.router.navigate(['grades/' + grade.id])
  }

  getGrades() {
    this.quizService.getGrades().subscribe(res => {
      this.grades = res
    })
  }
}
