import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-basic-user-view',
  templateUrl: './basic-user-view.component.html',
  styleUrls: ['./basic-user-view.component.css']
})


export class BasicUserViewComponent {
  
  constructor(private toast: NgToastService, private auth:AuthService,private router: Router) {};
  isOpen: boolean = false;
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  logout(){
    this.router.navigate(['login']); 
    this.toast.success({detail: "SUCCESS", summary: "Wylogowano pomyślnie", duration:5000});
    this.auth.logOut(); 
  }

}
