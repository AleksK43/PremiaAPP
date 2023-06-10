import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerTabComponent } from './admin-customer-tab.component';

describe('AdminCustomerTabComponent', () => {
  let component: AdminCustomerTabComponent;
  let fixture: ComponentFixture<AdminCustomerTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCustomerTabComponent]
    });
    fixture = TestBed.createComponent(AdminCustomerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
