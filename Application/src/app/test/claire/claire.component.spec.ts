import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaireComponent } from './claire.component';

describe('ClaireComponent', () => {
  let component: ClaireComponent;
  let fixture: ComponentFixture<ClaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
