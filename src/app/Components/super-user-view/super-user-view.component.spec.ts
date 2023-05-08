import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperUserViewComponent } from './super-user-view.component';

describe('SuperUserViewComponent', () => {
  let component: SuperUserViewComponent;
  let fixture: ComponentFixture<SuperUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperUserViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
