import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillersModificationComponent } from './conseillers-modification.component';

describe('ConseillersModificationComponent', () => {
  let component: ConseillersModificationComponent;
  let fixture: ComponentFixture<ConseillersModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillersModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillersModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
