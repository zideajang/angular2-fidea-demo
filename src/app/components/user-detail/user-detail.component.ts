import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validators  } from '@angular/forms';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  userForm:FormGroup
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required ] // <--- FormControl  "name"
    });
  }
  
  
}
