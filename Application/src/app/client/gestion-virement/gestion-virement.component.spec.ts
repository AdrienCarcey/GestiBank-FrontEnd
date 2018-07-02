import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVirementComponent } from './gestion-virement.component';

describe('GestionVirementComponent', () => {
  let component: GestionVirementComponent;
  let fixture: ComponentFixture<GestionVirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
