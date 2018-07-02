import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatthieuComponent } from './matthieu.component';

describe('MatthieuComponent', () => {
  let component: MatthieuComponent;
  let fixture: ComponentFixture<MatthieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatthieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatthieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
