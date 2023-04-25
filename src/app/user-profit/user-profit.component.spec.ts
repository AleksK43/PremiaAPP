import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfitComponent } from './user-profit.component';

describe('UserProfitComponent', () => {
  let component: UserProfitComponent;
  let fixture: ComponentFixture<UserProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
