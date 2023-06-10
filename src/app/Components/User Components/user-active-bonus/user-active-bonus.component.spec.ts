import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActiveBonusComponent } from './user-active-bonus.component';

describe('UserActiveBonusComponent', () => {
  let component: UserActiveBonusComponent;
  let fixture: ComponentFixture<UserActiveBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActiveBonusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserActiveBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
