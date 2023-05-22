import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password"; 
  isText:boolean = false;  
  loginForm!: FormGroup; 

  constructor(private router:Router, private auth: AuthService, private fb: FormBuilder) {} 

  ngOnInit(): void {
   this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
   })
    
  }

  onLogin (){
    this.router.navigate(['UserView']);
  }

}
