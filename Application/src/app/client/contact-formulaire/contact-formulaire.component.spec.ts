import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormulaireComponent } from './contact-formulaire.component';

describe('ContactFormulaireComponent', () => {
  let component: ContactFormulaireComponent;
  let fixture: ComponentFixture<ContactFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
