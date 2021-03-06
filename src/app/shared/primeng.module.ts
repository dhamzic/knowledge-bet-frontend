import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
// import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
    imports: [
        ButtonModule,
        DropdownModule,
        TableModule,
        ToastModule,
        ProgressSpinnerModule,
        ToolbarModule,
        DialogModule,
        // InputTextareaModule,
        InputTextModule,
    ],
    exports: [
        ButtonModule,
        DropdownModule,
        TableModule,
        ToastModule,
        ProgressSpinnerModule,
        ToolbarModule,
        DialogModule,
        // InputTextareaModule,
        InputTextModule
    ],
    declarations: [
    ]
})

export class PrimengModule { }