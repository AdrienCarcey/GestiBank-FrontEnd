import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClientsConsultationComponent } from './gestion-clients-consultation.component';

describe('GestionClientsConsultationComponent', () => {
  let component: GestionClientsConsultationComponent;
  let fixture: ComponentFixture<GestionClientsConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionClientsConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClientsConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
