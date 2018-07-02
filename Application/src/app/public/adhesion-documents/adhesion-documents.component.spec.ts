import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesionDocumentsComponent } from './adhesion-documents.component';

describe('AdhesionDocumentsComponent', () => {
  let component: AdhesionDocumentsComponent;
  let fixture: ComponentFixture<AdhesionDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhesionDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhesionDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
