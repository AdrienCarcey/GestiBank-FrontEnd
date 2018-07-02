import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillersAjoutComponent } from './conseillers-ajout.component';

describe('ConseillersAjoutComponent', () => {
  let component: ConseillersAjoutComponent;
  let fixture: ComponentFixture<ConseillersAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillersAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillersAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
