import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validators  } from '@angular/forms';

import { cities } from '../../models/user-data';

// const cities = ['BJ', 'SH', 'SY', 'SZ'];
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  userForm:FormGroup;
  cities = cities;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  //  this.cities = ['BJ', 'SH', 'SY', 'SZ']
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required ], // <--- FormControl  "name"
      address: this.fb.group({
        email:"",
        weixin:"",
        city:""
      }),
      language: '',
      isWebDeveloper: ''
    });
  }
  
  
}
