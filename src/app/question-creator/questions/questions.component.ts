import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { IQuestion } from '../models/IQuestion';
import { ITableColumnDefinition } from '../models/ITableColumnDefinition';
import { QuestionCreatorService } from '../services/question-creator.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input() questions: IQuestion[] = [];
  @Input() subcategoryId?: number;

  @Output() newQuestions: EventEmitter<void> = new EventEmitter<void>();

  cols: ITableColumnDefinition[];
  _selectedColumns: any[];

  selectedQuestions: IQuestion[] = [];

  @ViewChild("dt") dataTableComponent: Table | null = null;

  loading: boolean = false;

  recordCount: number = 0;

  constructor(private questionCreatorService: QuestionCreatorService) {
    this.cols = [
      { field: 'category', header: 'Category', type: "text", value: (obj: IQuestion) => obj.category.name },
      { field: 'subcategory', header: 'Subcategory', type: "text", value: (obj: IQuestion) => obj.subcategory.name },
      { field: 'text', header: 'Text', type: "text", value: (obj: IQuestion) => obj.text }
    ];

    this._selectedColumns = this.cols;
  }

  ngOnInit(): void {
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

  onCheckboxChange(): void {

  }

  deleteSelectedQuestions(): void {
    this.selectedQuestions.forEach(question => {
      this.questionCreatorService.deleteQuestion(question.id)
        .subscribe(data => {
          this.selectedQuestions = [];
          this.newQuestions.emit();
        });
    });
  }

  newQuestionDialogVisible: boolean = false;
  openNew(): void {
    this.newQuestionDialogVisible = true;
  }

}
