import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/Models/customers';
import { CustomerServiceService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-admin-customer-tab',
  templateUrl: './admin-customer-tab.component.html',
  styleUrls: ['./admin-customer-tab.component.css']
})
export class AdminCustomerTabComponent implements OnInit {
  customers: Customers[] = [];

  constructor(private customerService: CustomerServiceService) {}

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(
      (result: Customers[]) => {
        this.customers = result;
      },
      error => {
        console.error('Wystąpił błąd podczas pobierania danych customerów:', error);
      }
    );
  }
}
