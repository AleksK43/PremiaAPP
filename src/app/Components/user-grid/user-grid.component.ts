import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})

export class UserGridComponent {
constructor(private router:Router) {} 

RedirectToAddInvoice()
{
  this.router.navigate(['AddInvoice'])
}


}
