import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentCreateService } from 'src/app/Services/document-create.service';

@Component({
  selector: 'app-add-invoice-form',
  templateUrl: './add-invoice-form.component.html',
  styleUrls: ['./add-invoice-form.component.css']
})

export class AddInvoiceFormComponent implements OnInit {
  documentForm!: FormGroup;

constructor(
    private formBuilder: FormBuilder,
    private documentCreateService: DocumentCreateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.documentForm = this.formBuilder.group({
      name: ['', Validators.required],
      // Pozostałe pola formularza i ich walidatory
    });
  }

  addDocument() {
    if (this.documentForm.invalid) {
      return;
    }

    const documentData = this.documentForm.value;
    this.documentCreateService.addDocument(documentData).subscribe(
      response => {
        // Obsłuż odpowiedź z serwera po pomyślnym dodaniu dokumentu
        console.log('Dokument został dodany:', response);
        this.router.navigate(['UserView']) 
          },
      error => {
        // Obsłuż błąd w przypadku niepowodzenia żądania
        console.error('Wystąpił błąd podczas dodawania dokumentu:', error);
      }
    );
  }





  RedirectToUserGrid()
  {
    this.router.navigate(['UserView'])
  }
}
