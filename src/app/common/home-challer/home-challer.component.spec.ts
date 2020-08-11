import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChallerComponent } from './home-challer.component';

describe('HomeChallerComponent', () => {
  let component: HomeChallerComponent;
  let fixture: ComponentFixture<HomeChallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
