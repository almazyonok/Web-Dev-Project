import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GradesComponent} from "./grades/grades.component";
import {QuizesComponent} from "./quizes/quizes.component";
import {QuizePageComponent} from "./quize-page/quize-page.component";
import {AddQuizComponent} from "./add-quiz/add-quiz.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'grades', component: GradesComponent},
  {path: 'grades/:grade', component: QuizesComponent},
  {path: 'grades/:grade/add_quiz', component: AddQuizComponent},
  {path: 'grades/:grade/quizes/:quiz', component: QuizePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
