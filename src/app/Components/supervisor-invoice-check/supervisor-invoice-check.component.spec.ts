import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorInvoiceCheckComponent } from './supervisor-invoice-check.component';

describe('SupervisorInvoiceCheckComponent', () => {
  let component: SupervisorInvoiceCheckComponent;
  let fixture: ComponentFixture<SupervisorInvoiceCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorInvoiceCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorInvoiceCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
