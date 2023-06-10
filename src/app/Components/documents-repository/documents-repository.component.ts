import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections'; 
import { DocumentsService } from 'src/app/Services/documents.service';
import { Documents } from 'src/app/Models/documents';

@Component({
  selector: 'app-documents-repository',
  templateUrl: './documents-repository.component.html',
  styleUrls: ['./documents-repository.component.css'],
})
export class DocumentsRepositoryComponent implements AfterViewInit {
  documents: Documents[] = [];
  dataSource = new MatTableDataSource<Documents>([]);
  selection = new SelectionModel<Documents>(true, []);

  displayedColumns: string[] = ['select', 'id', 'customer', 'invoiceNumber', 'caseNumber', 'income', 'timeConsuming' , 'drive' , 'month' , 'invoiceStatus', 'createDate', 'settlementDate', 'modifyDate'];

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

  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.data.forEach((row) => this.selection.select(row));
    }
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
}
