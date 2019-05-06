import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
//import { Date } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate: any;

  constructor() { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear());
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
