import { Component } from '@angular/core';
import { Users } from 'src/app/Models/Users';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-user-user-grid',
  templateUrl: './super-user-user-grid.component.html',
  styleUrls: ['./super-user-user-grid.component.css']
})
export class SuperUserUserGridComponent {
  title = "User.UI "
  users: Users[] = []; 
  
  constructor(private usersService: UsersService,private router:Router ) {} 

  ngOnInit(): void {
    this.usersService.
    getUsers()
    .subscribe((result: Users[]) => (this.users = result));
  }

  
  RedirectToEditUser()
  {
    this.router.navigate(['UserEdit']); 
  }
}