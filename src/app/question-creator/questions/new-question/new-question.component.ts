import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {

  options: any[] = [
    {
      option: 1
    },
    {
      option: 2
    },
    {
      option: 3
    },
    {
      option: 4
    }
  ];

  @Input() subcategoryId?: number;

  formGroup: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      subcategory: [{ value: this.subcategoryId, disabled: true }, [Validators.required]],
      text: ['', [Validators.required]],
      firstOption: ['', [Validators.required]],
      secondOption: ['', [Validators.required]],
      thirdOption: ['', [Validators.required]],
      fourthOption: ['', [Validators.required]],
      correctOption: [null, [Validators.required]],
    })
  }

  createQuestion(): void {

  }

}
