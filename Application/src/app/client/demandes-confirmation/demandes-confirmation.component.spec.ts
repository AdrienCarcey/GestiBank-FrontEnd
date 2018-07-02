import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesConfirmationComponent } from './demandes-confirmation.component';

describe('DemandesConfirmationComponent', () => {
  let component: DemandesConfirmationComponent;
  let fixture: ComponentFixture<DemandesConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
