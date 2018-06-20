import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClientsListeComponent } from './gestion-clients-liste.component';

describe('GestionClientsListeComponent', () => {
  let component: GestionClientsListeComponent;
  let fixture: ComponentFixture<GestionClientsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionClientsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClientsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
