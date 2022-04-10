import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimengModule } from "../shared/primeng.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        PrimengModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }