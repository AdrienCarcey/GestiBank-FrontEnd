import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesComptebancaireComponent } from './demandes-comptebancaire.component';

describe('DemandesComptebancaireComponent', () => {
  let component: DemandesComptebancaireComponent;
  let fixture: ComponentFixture<DemandesComptebancaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesComptebancaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesComptebancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
