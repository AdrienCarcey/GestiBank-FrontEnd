import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConseillerAjouterComponent } from './gestion-conseiller-ajouter.component';

describe('GestionConseillerAjouterComponent', () => {
  let component: GestionConseillerAjouterComponent;
  let fixture: ComponentFixture<GestionConseillerAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionConseillerAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionConseillerAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
