import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConsulterComponent } from './gestion-consulter.component';

describe('GestionConsulterComponent', () => {
  let component: GestionConsulterComponent;
  let fixture: ComponentFixture<GestionConsulterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionConsulterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionConsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
