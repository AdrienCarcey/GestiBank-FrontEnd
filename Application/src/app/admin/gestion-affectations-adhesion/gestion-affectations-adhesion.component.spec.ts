import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAffectationsAdhesionComponent } from './gestion-affectations-adhesion.component';

describe('GestionAffectationsAdhesionComponent', () => {
  let component: GestionAffectationsAdhesionComponent;
  let fixture: ComponentFixture<GestionAffectationsAdhesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAffectationsAdhesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAffectationsAdhesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
