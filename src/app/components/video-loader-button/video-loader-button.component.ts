import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-loader-button',
  templateUrl: './video-loader-button.component.html',
  styleUrls: ['./video-loader-button.component.scss'],
})
export class VideoLoaderButtonComponent {
  @Input () value: number;

  constructor() { }

}
