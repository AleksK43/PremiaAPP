import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';
import { UserStoreService } from 'src/app/Services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  loginForm!: FormGroup;

  constructor(private userStore: UserStoreService, private router: Router, private auth: AuthService, private fb: FormBuilder,private toast: NgToastService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
     this.auth.login(this.loginForm.value)
     .subscribe({
      next:(res)=> {
        this.toast.success({detail:"Login SUCCESS", summary: "Gratulacje kierowniku", duration: 5000});
        this.loginForm.reset();
        this.auth.storeToken(res.token);
        const tokenaPayload = this.auth.decodeToken();
        this.userStore.setFullNameFromStore(tokenaPayload.unique_name);
        this.userStore.setRoleForStore(tokenaPayload.role);
        if (tokenaPayload.role == "Admin")
        {
          this.router.navigate(['SuperUserView'])
        }
        else if ( tokenaPayload.role == "Supervisor")
        {
          this.router.navigate(['SupervisorView'])
        } 
        else 
        this.router.navigate(['UserView']); 
      },
      error:(err)=>{
        this.toast.error({detail:"Kierowniku nie tędy droga", duration: 5000})
      }
     })
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
