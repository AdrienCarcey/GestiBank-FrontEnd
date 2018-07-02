import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsConsultationComponent } from './clients-consultation.component';

describe('ClientsConsultationComponent', () => {
  let component: ClientsConsultationComponent;
  let fixture: ComponentFixture<ClientsConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
