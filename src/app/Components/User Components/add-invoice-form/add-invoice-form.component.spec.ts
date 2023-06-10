import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceFormComponent } from './add-invoice-form.component';

describe('AddInvoiceFormComponent', () => {
  let component: AddInvoiceFormComponent;
  let fixture: ComponentFixture<AddInvoiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInvoiceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInvoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
