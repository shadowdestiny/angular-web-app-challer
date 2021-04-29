import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRadiusComponent } from './image-radius.component';

describe('ImageRadiusComponent', () => {
  let component: ImageRadiusComponent;
  let fixture: ComponentFixture<ImageRadiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRadiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
