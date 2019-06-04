import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-subjects',
  templateUrl: './admin-subjects.component.html',
  styleUrls: ['./admin-subjects.component.sass']
})
export class AdminSubjectsComponent implements OnInit {
  subjectForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createSubjectForm();
  }

  addSubject(values) {
    if (this.subjectForm.invalid) {
      // return;
    }
    console.log(values);
  }

  createSubjectForm() {
    this.subjectForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      course: [
        'Please Select..',
        [Validators.required, Validators.pattern('((?!Select).)*')]
      ],
      credits: ['', Validators.required]
    });
  }

  get code() {
    return this.subjectForm.get('code');
  }
  get name() {
    return this.subjectForm.get('name');
  }
  get course() {
    return this.subjectForm.get('course');
  }
  get credits() {
    return this.subjectForm.get('credits');
  }
}
