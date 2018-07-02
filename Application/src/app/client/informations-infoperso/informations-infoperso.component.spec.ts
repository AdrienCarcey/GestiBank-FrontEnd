import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsInfopersoComponent } from './informations-infoperso.component';

describe('InformationsInfopersoComponent', () => {
  let component: InformationsInfopersoComponent;
  let fixture: ComponentFixture<InformationsInfopersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsInfopersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsInfopersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
