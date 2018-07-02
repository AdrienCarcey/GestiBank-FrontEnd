import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesDocumentbancaireComponent } from './demandes-documentbancaire.component';

describe('DemandesDocumentbancaireComponent', () => {
  let component: DemandesDocumentbancaireComponent;
  let fixture: ComponentFixture<DemandesDocumentbancaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesDocumentbancaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesDocumentbancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
