import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
// import { Student } from 'src/app/models/Student.model';
// import { Sub } from 'src/app/models/Subjects.model';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.sass']
})
export class AdminStudentsComponent implements OnInit {

  studentForm: FormGroup;
  items: any;
  subjects: any;
  selectedStudent;
  selectedSub;

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit() {
    this.createStudentForm();
    this.studentService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  unassignSub(sub) {
    this.studentService.unassignSubject(this.selectedStudent, sub).subscribe(res => {
      this.selectedStudent.subjects.forEach((ele, i) => {
        if (ele.code === sub.code) {
          this.selectedStudent.subjects.splice(i, 1);
        }
      });
    });

  }

  assignSubject() {
    this.studentService.assignSubject(this.selectedStudent, this.selectedSub).subscribe(res => {
      this.selectedStudent.subjects.push(this.selectedSub);
    });
  }

  selectStudent(student) {
    this.selectedStudent = student;
    this.studentService.elegibleSubjects(student.course).subscribe(res => {
      // order matters :D
      this.subjects = res;
      this.selectedSub = this.subjects[0];
      this.selectedStudent.subjects = this.selectedStudent.subjects.concat(this.subjects.filter(s => s.availability === 'compulsory'));
      this.subjects = this.subjects.filter(s => s.availability === 'optional');
    });
  }

  removeItem(id) {
    this.studentService.removeItem(id).toPromise().then((data) => {
      this.items.forEach((item, i) => {
        if (item._id === id) {
          this.items.splice(i, 1);
        }
      });
      console.log(data);
    });
  }

  saveItem(values) {
    this.studentService.updateItem(values).subscribe((res) => {
      console.log(res);
    });
  }

  addItem(values) {
    if (this.studentForm.invalid) {
      return;
    }
    this.studentService.addItem(values).subscribe(res => {
      this.items.push(res.item);
      this.studentForm.reset();
    });
  }

  createStudentForm() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  get name() {
    return this.studentForm.get('name');
  }
  get price() {
    return this.studentForm.get('price');
  }
  get date() {
    return this.studentForm.get('date');
  }


}
