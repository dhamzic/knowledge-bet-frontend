import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
// import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
// import { DialogModule } from 'primeng/dialog';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        ButtonModule,
        // TableModule,
        ToastModule,
        ProgressSpinnerModule,
        // DialogModule,
        // InputTextareaModule,
        // InputTextModule,
    ],
    exports: [
        ButtonModule,
        // TableModule,
        ToastModule,
        ProgressSpinnerModule,
        // DialogModule,
        // InputTextareaModule,
        // InputTextModule
    ],
    declarations: [
    ]
})

export class PrimengModule { }