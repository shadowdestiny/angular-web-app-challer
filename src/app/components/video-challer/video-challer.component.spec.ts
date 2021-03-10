import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoChallerComponent } from './video-challer.component';

describe('VideoChallerComponent', () => {
  let component: VideoChallerComponent;
  let fixture: ComponentFixture<VideoChallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoChallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoChallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
