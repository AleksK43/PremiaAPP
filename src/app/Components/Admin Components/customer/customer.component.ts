import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Customers } from 'src/app/Models/customers';
import { CustomerServiceService } from 'src/app/Services/customer.service';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements AfterViewInit {
  customers: Customers[] = [];
  displayedColumns: string[] = ['select', 'id', 'customerName'];
  dataSource = new MatTableDataSource<Customers>([]); 
  selection = new SelectionModel<Customers>(true,[]);

@ViewChild(MatPaginator) paginator!: MatPaginator; 
constructor(private router:Router, private customerService: CustomerServiceService ){}

  ngOnInit(): void{
    this.customerService.getAllCustomer().subscribe((result: Customers[]) => {
      this.customers = result.map((cus,index) => ({...cus, position: index +1}));
      this.dataSource.data = this.customers; 
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
  }

  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

}
