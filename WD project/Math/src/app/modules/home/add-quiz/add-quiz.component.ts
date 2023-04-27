import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../../core/services/quiz.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {
  gradeId = this.activatedRoute.snapshot.params['grade']
  title = ""
  isEditTitle = true

  description = ""
  isEditDescription = true

  questionDescription = ""
  isQuestionAdded = true

  variantText: string[] = ["",]
  variantRight: boolean[] = [false,]
  isVariantAdded: boolean[] = [true,]

  quiz: any = {
    name: "",
    description: "",
    questions: []
  }

  constructor(private quizService: QuizService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  finishEditTitle() {
    if (this.title !== "") {
      this.quiz.name = this.title
      this.isEditTitle = false
    }
  }

  startEditTitle() {
    this.isEditTitle = true
  }

  finishEditDesc() {
    if (this.description !== "") {
      this.quiz.description = this.description
      this.isEditDescription = false
    }
  }

  startEditDesc() {
    this.isEditDescription = true
  }


  finishQuestion() {
    if (this.questionDescription !== "") {
      this.quiz.questions.push(
        {
          description: this.questionDescription,
          variants: []
        }
      )
      this.variantText.push("")
      this.variantRight.push(false)
      this.isVariantAdded.push(true)
      this.questionDescription = ""
      this.isQuestionAdded = true
    }
  }

  addQuestion() {
    this.isQuestionAdded = false
  }

  finishVariant(index: number) {
    if (this.variantText[index] !== "") {
      this.quiz.questions[index].variants.push(
        {
          text: this.variantText[index],
          right: this.variantRight[index]
        }
      )
      this.variantText[index] = ""
      this.variantRight[index] = false
      this.isVariantAdded[index] = true
    }
  }

  addVariant(index: number) {
    this.variantText[index] = ""
    this.variantRight[index] = false
    this.isVariantAdded[index] = false
  }

  addQuiz() {
    if (this.quiz.name && this.quiz.description && this.quiz.questions.length > 0) {
      this.quizService.addQuiz(this.gradeId, this.quiz).subscribe(res => {
        this.router.navigate(['grades/' + this.gradeId])
      })
    } else {
      alert("Не правильно составлен тест")
    }
  }
}
