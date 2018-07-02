import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationsAdhesionComponent } from './affectations-adhesion.component';

describe('AffectationsAdhesionComponent', () => {
  let component: AffectationsAdhesionComponent;
  let fixture: ComponentFixture<AffectationsAdhesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectationsAdhesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationsAdhesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
