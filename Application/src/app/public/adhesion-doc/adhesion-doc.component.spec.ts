import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesionDocComponent } from './adhesion-doc.component';

describe('AdhesionDocComponent', () => {
  let component: AdhesionDocComponent;
  let fixture: ComponentFixture<AdhesionDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhesionDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhesionDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
