import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceBonusTableComponent } from './invoice-bonus-table.component';

describe('InvoiceBonusTableComponent', () => {
  let component: InvoiceBonusTableComponent;
  let fixture: ComponentFixture<InvoiceBonusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceBonusTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceBonusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
