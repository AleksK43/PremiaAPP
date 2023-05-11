import { Component } from '@angular/core';
import { Users } from 'src/app/Models/Users';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-super-user-user-grid',
  templateUrl: './super-user-user-grid.component.html',
  styleUrls: ['./super-user-user-grid.component.css']
})
export class SuperUserUserGridComponent {
  Users: Users[] = []; 
  
  constructor(private usersService: UsersService) {} 

ngOnInit(): void {
this.usersService.getUsers().subscribe((result: Users[])=> this.Users = result);
}
}