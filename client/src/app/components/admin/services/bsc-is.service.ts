import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/components/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BscIsService {

  constructor(private http: HttpClient) { }

  removeSubject(id: string) {
    return this.http.delete(`http://localhost:8080/admin/subject/bscis/${id}`,
      { headers: { Authorization: `Bearer` } });
  }

  saveSubject(values) {
    return this.http.put(`http://localhost:8080/admin/subject/bscis/${values._id}`, values,
      { headers: { Authorization: `Bearer ` } });
  }

  addSubject(values) {
    return this.http.post('http://localhost:8080/admin/subject/bscis', values,
      { headers: { Authorization: `Bearer ` } });
  }

  getSubjects() {
    return this.http.get('http://localhost:8080/admin/subject/bscis',
      { headers: { Authorization: `Bearer ` } });
  }
}
