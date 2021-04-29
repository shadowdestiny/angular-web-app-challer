import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareImageResponsiveComponent } from './square-image-responsive.component';

describe('SquareImageResponsiveComponent', () => {
  let component: SquareImageResponsiveComponent;
  let fixture: ComponentFixture<SquareImageResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareImageResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareImageResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
