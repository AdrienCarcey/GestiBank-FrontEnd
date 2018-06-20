import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesionInfobancaireComponent } from './adhesion-infobancaire.component';

describe('AdhesionInfobancaireComponent', () => {
  let component: AdhesionInfobancaireComponent;
  let fixture: ComponentFixture<AdhesionInfobancaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhesionInfobancaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhesionInfobancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
