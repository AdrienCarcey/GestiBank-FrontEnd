import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AymenComponent } from './aymen.component';

describe('AymenComponent', () => {
  let component: AymenComponent;
  let fixture: ComponentFixture<AymenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AymenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AymenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
