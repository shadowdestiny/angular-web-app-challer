import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoLoaderButtonComponent } from './video-loader-button.component';

describe('VideoLoaderButtonComponent', () => {
  let component: VideoLoaderButtonComponent;
  let fixture: ComponentFixture<VideoLoaderButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLoaderButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoLoaderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
