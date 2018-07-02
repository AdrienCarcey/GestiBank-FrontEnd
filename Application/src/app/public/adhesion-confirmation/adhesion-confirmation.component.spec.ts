import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesionConfirmationComponent } from './adhesion-confirmation.component';

describe('AdhesionConfirmationComponent', () => {
  let component: AdhesionConfirmationComponent;
  let fixture: ComponentFixture<AdhesionConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhesionConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhesionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
