import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesInfopersoComponent } from './demandes-infoperso.component';

describe('DemandesInfopersoComponent', () => {
  let component: DemandesInfopersoComponent;
  let fixture: ComponentFixture<DemandesInfopersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesInfopersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesInfopersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
