import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  loginForm!: FormGroup;

  constructor(private router: Router, private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
     // this.router.navigate(['UserView']);
    console.log(this.loginForm.value)
    }
     else {
      // Obsłuż przypadek, gdy formularz jest nieprawidłowy
      this.validateAllFromFields(this.loginForm);
    }
  }

  private validateAllFromFields(formGroup: FormGroup | null | undefined) {
    if (!formGroup) {
      return;
    }
  
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
  
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFromFields(control);
      }
    });
  }
}
