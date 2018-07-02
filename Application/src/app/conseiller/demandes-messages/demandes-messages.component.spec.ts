import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesMessagesComponent } from './demandes-messages.component';

describe('DemandesMessagesComponent', () => {
  let component: DemandesMessagesComponent;
  let fixture: ComponentFixture<DemandesMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandesMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
