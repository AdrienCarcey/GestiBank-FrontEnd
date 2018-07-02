import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdrienComponent } from './adrien.component';

describe('AdrienComponent', () => {
  let component: AdrienComponent;
  let fixture: ComponentFixture<AdrienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdrienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdrienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
