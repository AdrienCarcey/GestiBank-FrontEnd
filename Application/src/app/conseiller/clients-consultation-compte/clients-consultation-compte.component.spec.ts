import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsConsultationCompteComponent } from './clients-consultation-compte.component';

describe('ClientsConsultationCompteComponent', () => {
  let component: ClientsConsultationCompteComponent;
  let fixture: ComponentFixture<ClientsConsultationCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsConsultationCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsConsultationCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
