import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDemandesAdhesionsComponent } from './gestion-demandes-adhesions.component';

describe('GestionDemandesAdhesionsComponent', () => {
  let component: GestionDemandesAdhesionsComponent;
  let fixture: ComponentFixture<GestionDemandesAdhesionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDemandesAdhesionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDemandesAdhesionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
