import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeConfirmationComponent } from './demande-confirmation.component';

describe('DemandeConfirmationComponent', () => {
  let component: DemandeConfirmationComponent;
  let fixture: ComponentFixture<DemandeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
