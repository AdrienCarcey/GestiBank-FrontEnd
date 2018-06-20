import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAffectationsClientsComponent } from './gestion-affectations-clients.component';

describe('GestionAffectationsClientsComponent', () => {
  let component: GestionAffectationsClientsComponent;
  let fixture: ComponentFixture<GestionAffectationsClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAffectationsClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAffectationsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
