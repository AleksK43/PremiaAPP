import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUserViewComponent } from './basic-user-view.component';

describe('BasicUserViewComponent', () => {
  let component: BasicUserViewComponent;
  let fixture: ComponentFixture<BasicUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicUserViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
