import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDemandesMessagesComponent } from './gestion-demandes-messages.component';

describe('GestionDemandesMessagesComponent', () => {
  let component: GestionDemandesMessagesComponent;
  let fixture: ComponentFixture<GestionDemandesMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDemandesMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDemandesMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
