import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsModificationComponent } from './clients-modification.component';

describe('ClientsModificationComponent', () => {
  let component: ClientsModificationComponent;
  let fixture: ComponentFixture<ClientsModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
