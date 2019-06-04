import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BscCsService } from '../../services/bsc-cs.service';

@Component({
  selector: 'app-bsc-cs',
  templateUrl: './bsc-cs.component.html',
  styleUrls: ['./bsc-cs.component.sass']
})
export class BscCsComponent implements OnInit {
  subjectForm: FormGroup;
  subjects: any;

  constructor(private fb: FormBuilder, private subService: BscCsService) { }

  ngOnInit() {
    this.createSubjectForm();
    this.subService.getSubjects().subscribe(res => {
      this.subjects = res;
    });
  }
  removeSubject(id) {
    this.subService.removeSubject(id).subscribe(res => {
      this.subjects.forEach((sub, i) => {
        if (sub.code === id) {
          this.subjects.splice(i, 1);
        }
      });
    });
  }
  saveSubject(values) {
    this.subService.saveSubject(values).subscribe(res => {
      console.log(res);
    });
  }

  addSubject(values) {
    if (this.subjectForm.invalid) {
      return;
    }
    this.subService.addSubject(values).subscribe(res => {
      this.subjects.push(res);
      this.subjectForm.reset();
    });
  }

  createSubjectForm() {
    this.subjectForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      credits: ['', Validators.required],
      availability: ['', Validators.required]
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
