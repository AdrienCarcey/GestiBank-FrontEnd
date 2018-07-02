import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesClientComponent } from './demandes-client.component';

describe('DemandesClientComponent', () => {
  let component: DemandesClientComponent;
  let fixture: ComponentFixture<DemandesClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
