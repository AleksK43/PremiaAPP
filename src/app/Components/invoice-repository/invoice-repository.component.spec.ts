import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceRepositoryComponent } from './invoice-repository.component';

describe('InvoiceRepositoryComponent', () => {
  let component: InvoiceRepositoryComponent;
  let fixture: ComponentFixture<InvoiceRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceRepositoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
