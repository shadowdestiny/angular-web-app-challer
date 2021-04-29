import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SquareImageComponent } from './square-image.component';

describe('SquareImageComponent', () => {
  let component: SquareImageComponent;
  let fixture: ComponentFixture<SquareImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareImageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SquareImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
