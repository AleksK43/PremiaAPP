import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';
import { UserStoreService } from 'src/app/Services/user-store.service';

@Component({
  selector: 'app-supervisor-view',
  templateUrl: './supervisor-view.component.html',
  styleUrls: ['./supervisor-view.component.css']
})
export class SupervisorViewComponent {
  public selectedComponent: string = "supervisor-view'";
  public unique_name : string = ""; 
  isOpen = false;
  showSubmenu = false;
  
  constructor(private toast: NgToastService, private auth:AuthService,private router: Router, private store: UserStoreService) {};
  
  ngOnInit() {
    this.store.getFullNameFromStore()
    .subscribe(val=> {
      let fullNameFromToken = this.auth.getNameFromToken(); 
      this.unique_name = val || fullNameFromToken
      this.selectedComponent ="supervisor-view";

    })
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleSubmenu() {
    this.showSubmenu = !this.showSubmenu;
  }

  closeSubmenu() {
    this.showSubmenu = false;
  }

  logout(){
    this.router.navigate(['login']); 
    this.toast.success({detail: "SUCCESS", summary: "Wylogowano pomyślnie", duration:5000});
    this.auth.logOut(); 
  }

   
  changeComponent(componentName: string) {
    this.selectedComponent = componentName;
  }
}
