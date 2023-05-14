import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent {
  constructor(private router:Router) {} 
  RedirectToSuperUserView()
  {
    this.router.navigate(['SuperUserView']); 
    
  }

}
