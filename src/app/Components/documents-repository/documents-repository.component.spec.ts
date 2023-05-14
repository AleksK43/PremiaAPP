import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsRepositoryComponent } from './documents-repository.component';

describe('DocumentsRepositoryComponent', () => {
  let component: DocumentsRepositoryComponent;
  let fixture: ComponentFixture<DocumentsRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsRepositoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
