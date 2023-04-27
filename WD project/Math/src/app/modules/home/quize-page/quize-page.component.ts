import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../../core/services/quiz.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quize-page',
  templateUrl: './quize-page.component.html',
  styleUrls: ['./quize-page.component.scss']
})
export class QuizePageComponent implements OnInit {
  quiz: any
  answers: any[] = []
  message = ""
  isFinished = false
  isSelected: boolean = false

  constructor(private quizService: QuizService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getQuizInfo()
  }

  getQuizInfo() {
    this.quizService.getQuizInfo(this.activatedRoute.snapshot.params['quiz']).subscribe(res => {
      this.quiz = res
      for (let i = 0; i < this.quiz.questions.length; i++) {
        this.answers.push(null)
      }
    })
  }

  changeAnswer(i: number, variant: any) {
    this.answers[i] = variant
    this.isSelected = true
    console.log(this.answers)
  }

  showPersentage() {
    if (this.isSelected) {
      this.isFinished = true
      let rigts = 0
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i].right) {
          rigts = rigts + 1
        }
      }
      this.message = "Процент верных ответов " + String((rigts / this.answers.length) * 100) + "%"
    }
    else{
      window.alert("Заполните хотя бы один ответ")
    }
  }
}
