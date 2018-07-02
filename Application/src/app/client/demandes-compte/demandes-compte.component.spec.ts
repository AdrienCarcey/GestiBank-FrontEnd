import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesCompteComponent } from './demandes-compte.component';

describe('DemandesCompteComponent', () => {
  let component: DemandesCompteComponent;
  let fixture: ComponentFixture<DemandesCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
