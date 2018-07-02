import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationsClientComponent } from './affectations-client.component';

describe('AffectationsClientComponent', () => {
  let component: AffectationsClientComponent;
  let fixture: ComponentFixture<AffectationsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectationsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
