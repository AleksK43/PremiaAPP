import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentCreateService } from 'src/app/Services/document-create.service';
import { UsersService } from 'src/app/Services/users.service';
import { Users } from 'src/app/Models/Users';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-invoice-form',
  templateUrl: './add-invoice-form.component.html',
  styleUrls: ['./add-invoice-form.component.css']
})
export class AddInvoiceFormComponent implements OnInit {
  documentForm!: FormGroup;
  users: Users[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private documentCreateService: DocumentCreateService,
    private userService: UsersService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit() {
    this.loadUsers();
    this.documentForm = this.formBuilder.group({
      customer: ['', Validators.required],
      invoiceNumber: ['', Validators.required],
      type: ['', Validators.required],
      invoiceOwner: ['', Validators.required],
      caseNumber: ['', Validators.required],
      income: ['', Validators.required],
      timeConsuming: ['', Validators.required],
      drive: ['', Validators.required],
      month: ['', Validators.required],
      invoiceStatus: ['', Validators.required],
    });
  }

  onChangeInvoiceOwnerEvent(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.onChangeInvoiceOwner(selectElement ? selectElement.value : '');
  }

  onChangeInvoiceOwner(value: string): void {
    // 
    console.log('Invoice owner changed:', value);
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (users: Users[]) => {
        this.users = users;
      },
      error => {
        console.error('There was an error while fetching the users: ', error);
      }
    );
  }

  addDocument() {
    console.log('addDocument called');
    if (this.documentForm.invalid) {
      console.log('Form is invalid'); 

      for (const field in this.documentForm.controls) {
        if (this.documentForm.controls[field].invalid) {
          this.toast.error({detail: `pole ${field} zawiera niepoprawne dane`, summary: "", duration:5000})
          console.log(`Field ${field} is invalid`);
        }
      }

      return;
    }
    const documentData = this.documentForm.value;
    documentData.createDate = new Date(); // Aktualna data
    this.documentCreateService.addDocument(documentData).subscribe(
      response => {
        this.toast.success({detail:"Dokument dodany" , summary:"gratulacje kierowniku", duration: 5000})
        this.router.navigate(['UserView']) 
          },
      error => {
        this.toast.error({detail:"Błąd dodawania", summary:"Kierowniku niestety nie dodaliśmy dokumentu napiszd do Aleksa", duration: 5000})
        console.error('Wystąpił błąd podczas dodawania dokumentu:', error);
      }
    );
  }

  RedirectToUserGrid() {
    this.router.navigate(['UserView'])
  }
}
