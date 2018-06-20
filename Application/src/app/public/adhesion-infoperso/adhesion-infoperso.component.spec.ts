import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesionInfopersoComponent } from './adhesion-infoperso.component';

describe('AdhesionInfopersoComponent', () => {
  let component: AdhesionInfopersoComponent;
  let fixture: ComponentFixture<AdhesionInfopersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhesionInfopersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhesionInfopersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
