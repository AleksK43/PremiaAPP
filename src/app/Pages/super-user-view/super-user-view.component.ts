import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';
import { UserStoreService } from 'src/app/Services/user-store.service';


@Component({
  selector: 'app-super-user-view',
  templateUrl: './super-user-view.component.html',
  styleUrls: ['./super-user-view.component.css']
})
export class SuperUserViewComponent {
  public selectedComponent: string ="Users"; 
  public unique_name : string = ""; 
  
  constructor(private toast: NgToastService, private auth:AuthService,private router: Router, private store: UserStoreService) {};
  isOpen: boolean = false;
  
  ngOnInit() {
    this.store.getFullNameFromStore()
    .subscribe(val=> {
      let fullNameFromToken = this.auth.getNameFromToken(); 
      this.unique_name = val || fullNameFromToken;
      this.selectedComponent ="Users"; 
    })
  }


  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  logout(){
    this.router.navigate(['login']); 
    this.toast.success({detail: "SUCCESS", summary: "Wylogowano pomyślnie", duration:5000});
    this.auth.logOut(); 
  }
changeComponent(componentName:string)
{
this.selectedComponent = componentName;
}

}
