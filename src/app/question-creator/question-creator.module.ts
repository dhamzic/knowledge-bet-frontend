import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimengModule } from "../shared/primeng.module";
import { QuestionCreatorRoutingModule } from "./question-creator-routing.module";
import { QuestionCreatorComponent } from "./question-creator.component";
import { QuestionsComponent } from './questions/questions.component';
import { NewQuestionComponent } from './questions/new-question/new-question.component';

@NgModule({
    imports: [
        CommonModule,
        QuestionCreatorRoutingModule,
        PrimengModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        QuestionCreatorComponent,
        QuestionsComponent,
        NewQuestionComponent
    ]
})
export class QuestionCreatorModule { }