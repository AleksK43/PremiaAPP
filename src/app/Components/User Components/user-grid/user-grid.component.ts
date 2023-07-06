import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections'; 
import { DocumentsService } from 'src/app/Services/documents.service';
import { Documents } from 'src/app/Models/documents';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css'],
})
export class UserGridComponent implements AfterViewInit {
  
  documents: Documents[] = [];
  displayedColumns: string[] = ['select', 'id', 'customer', 'invoiceNumber', 'caseNumber', 'income', 'timeConsuming' , 'drive' , 'month' , 'invoiceStatus', 'createDate', 'settlementDate', 'modifyDate', 'edit'];
  dataSource = new MatTableDataSource<Documents>([]);
  selection = new SelectionModel<Documents>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private router: Router, private documentsService: DocumentsService) {}
  ngOnInit(): void {
    this.documentsService.getAllDocuments().subscribe((result: Documents[]) => {
      this.documents = result.map((doc, index) => ({ ...doc, position: index + 1 }));
      this.dataSource.data = this.documents;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  editDocument(document: Documents): void {
    this.router.navigate(['DocumentEdit'], { queryParams: { id: document.id } });
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

  RedirectToAddInvoice(): void {
    this.router.navigate(['AddInvoice']);
  }
}
