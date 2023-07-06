import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEditComponentComponent } from './document-edit-component.component';

describe('DocumentEditComponentComponent', () => {
  let component: DocumentEditComponentComponent;
  let fixture: ComponentFixture<DocumentEditComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentEditComponentComponent]
    });
    fixture = TestBed.createComponent(DocumentEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
