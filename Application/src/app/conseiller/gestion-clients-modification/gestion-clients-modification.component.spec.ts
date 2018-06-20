import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClientsModificationComponent } from './gestion-clients-modification.component';

describe('GestionClientsModificationComponent', () => {
  let component: GestionClientsModificationComponent;
  let fixture: ComponentFixture<GestionClientsModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionClientsModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionClientsModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
