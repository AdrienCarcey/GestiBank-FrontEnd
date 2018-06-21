import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAjoutCompteComponent } from './gestion-ajout-compte.component';

describe('GestionAjoutCompteComponent', () => {
  let component: GestionAjoutCompteComponent;
  let fixture: ComponentFixture<GestionAjoutCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAjoutCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAjoutCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
