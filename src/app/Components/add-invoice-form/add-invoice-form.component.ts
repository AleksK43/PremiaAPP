import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-invoice-form',
  templateUrl: './add-invoice-form.component.html',
  styleUrls: ['./add-invoice-form.component.css']
})

export class AddInvoiceFormComponent {

  constructor(private router:Router) {} 

  RedirectToUserGrid()
  {
    this.router.navigate(['UserView'])
  }
}
