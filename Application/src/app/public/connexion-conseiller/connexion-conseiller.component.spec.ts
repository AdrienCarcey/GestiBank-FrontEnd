import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionConseillerComponent } from './connexion-conseiller.component';

describe('ConnexionConseillerComponent', () => {
  let component: ConnexionConseillerComponent;
  let fixture: ComponentFixture<ConnexionConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
