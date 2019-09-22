import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkthankComponent } from './thinkthank.component';

describe('ThinkthankComponent', () => {
  let component: ThinkthankComponent;
  let fixture: ComponentFixture<ThinkthankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThinkthankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkthankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
