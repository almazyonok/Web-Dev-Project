import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { GradesComponent } from './grades/grades.component';
import { QuizesComponent } from './quizes/quizes.component';
import { QuizePageComponent } from './quize-page/quize-page.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    GradesComponent,
    QuizesComponent,
    QuizePageComponent,
    AddQuizComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule
    ]
})
export class HomeModule { }
