import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConseillerModifierComponent } from './gestion-conseiller-modifier.component';

describe('GestionConseillerModifierComponent', () => {
  let component: GestionConseillerModifierComponent;
  let fixture: ComponentFixture<GestionConseillerModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionConseillerModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionConseillerModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
