import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PrimengModule } from "../shared/primeng.module";
import { QuestionCreatorRoutingModule } from "./question-creator-routing.module";
import { QuestionCreatorComponent } from "./question-creator.component";

@NgModule({
    imports: [
        CommonModule,
        QuestionCreatorRoutingModule,
        PrimengModule,
        FormsModule
    ],
    declarations: [
        QuestionCreatorComponent
    ]
})
export class QuestionCreatorModule { }