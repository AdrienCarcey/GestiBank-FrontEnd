import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsCompteComponent } from './informations-compte.component';

describe('InformationsCompteComponent', () => {
  let component: InformationsCompteComponent;
  let fixture: ComponentFixture<InformationsCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
