import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDemandesClientsComponent } from './gestion-demandes-clients.component';

describe('GestionDemandesClientsComponent', () => {
  let component: GestionDemandesClientsComponent;
  let fixture: ComponentFixture<GestionDemandesClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDemandesClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDemandesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
