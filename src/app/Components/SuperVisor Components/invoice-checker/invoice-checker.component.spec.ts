import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceCheckerComponent } from './invoice-checker.component';

describe('InvoiceCheckerComponent', () => {
  let component: InvoiceCheckerComponent;
  let fixture: ComponentFixture<InvoiceCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
