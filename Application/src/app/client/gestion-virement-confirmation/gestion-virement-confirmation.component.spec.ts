import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVirementConfirmationComponent } from './gestion-virement-confirmation.component';

describe('GestionVirementConfirmationComponent', () => {
  let component: GestionVirementConfirmationComponent;
  let fixture: ComponentFixture<GestionVirementConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVirementConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVirementConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
