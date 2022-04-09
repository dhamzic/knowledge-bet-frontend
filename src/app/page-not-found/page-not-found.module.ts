import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PrimengModule } from '../shared/primeng.module';

@NgModule({
    imports: [
        CommonModule,
        PrimengModule,
        PageNotFoundRoutingModule
    ],
    declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }