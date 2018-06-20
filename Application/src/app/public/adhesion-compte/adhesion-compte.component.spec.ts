import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesionCompteComponent } from './adhesion-compte.component';

describe('AdhesionCompteComponent', () => {
  let component: AdhesionCompteComponent;
  let fixture: ComponentFixture<AdhesionCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhesionCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhesionCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
