import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  text: string;
  constructor() { }

  ngOnInit() {
    this.title = "Let's Buy Some";
    this.text = "Select your all the requirements";
  }

}
