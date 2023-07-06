import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsService } from 'src/app/Services/documents.service';
import { Documents } from 'src/app/Models/documents';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit-component.component.html',
  styleUrls: ['./document-edit-component.component.css']
})
export class DocumentEditComponent implements OnInit {
  document: Documents | null = null;
  documentForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private documentsService: DocumentsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if(id){
        this.documentsService.getDocument(id).subscribe(document => {
          this.document = document;
          this.documentForm = this.formBuilder.group({
            customer: this.document.customer,
            invoiceNumber: this.document.invoiceNumber,
            type: this.document.type,
            invoiceOwner: this.document.invoiceOwner,
            caseNumber: this.document.caseNumber,
            income: this.document.income,
            timeConsuming: this.document.timeConsuming,
            drive: this.document.drive,
            month: this.document.month,
            invoiceStatus: this.document.invoiceStatus,
          });
        });
      }
    });
  }

  save(): void {
    if(this.document && this.documentForm.valid){
      this.documentsService.updateDocument(this.documentForm.value).subscribe(() => {
        this.router.navigate(['UserGrid']);
      });
    }
  }

  RedirectToUserGrid(): void{
    this.router.navigate(['UserGrid'])
  }
}
