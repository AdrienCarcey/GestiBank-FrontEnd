import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillersConsultationComponent } from './conseillers-consultation.component';

describe('ConseillersConsultationComponent', () => {
  let component: ConseillersConsultationComponent;
  let fixture: ComponentFixture<ConseillersConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillersConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillersConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
