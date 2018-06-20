import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConseillerListeComponent } from './gestion-conseiller-liste.component';

describe('GestionConseillerListeComponent', () => {
  let component: GestionConseillerListeComponent;
  let fixture: ComponentFixture<GestionConseillerListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionConseillerListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionConseillerListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
