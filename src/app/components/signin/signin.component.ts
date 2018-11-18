import { Component, OnInit } from '@angular/core';
import { SigninService } from './../../signin.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

export interface School {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  submitted = false;

  profileForm = this.fb.group({
    schoolChoose:[null, Validators.required],
    name:['', Validators.required],
    password:['', [Validators.required, Validators.minLength(6)]]
  });
  constructor(private ser: SigninService, private router: Router, private fb: FormBuilder) { }
  schools: School[] = [
    { value: '0', viewValue: 'PS-140' },
    { value: '1', viewValue: 'PS-245' },
    { value: '2', viewValue: 'PS-35' }
  ];



  ngOnInit() {

  }

  username: string;
  password: string;
  signin() {
    if (this.ser.setUser(this.schools[0],this.username,this.password)) {
      this.router.navigate(['home/',]);
    }

  }
}
