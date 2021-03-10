import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SquareImageLikeComponent } from './square-image-like.component';

describe('SquareImageLikeComponent', () => {
  let component: SquareImageLikeComponent;
  let fixture: ComponentFixture<SquareImageLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareImageLikeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SquareImageLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
