import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperUserUserGridComponent } from './super-user-user-grid.component';

describe('SuperUserUserGridComponent', () => {
  let component: SuperUserUserGridComponent;
  let fixture: ComponentFixture<SuperUserUserGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperUserUserGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperUserUserGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
