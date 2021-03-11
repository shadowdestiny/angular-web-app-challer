import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-image-radius',
  templateUrl: './image-radius.component.html',
  styleUrls: ['./image-radius.component.scss']
})
export class ImageRadiusComponent implements OnInit, OnChanges {

  @Input() src: string;
  @Input() type = null;
  @Input() isPulse = false;
  @Input() isFront = false;
  @Input() isLoading = false;
  @Input() isDark = false;
  @Input() isOpacity = false;
  @Input() borderName = '';
  @Input() size = 100;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.type) {
      this.type = changes.type.currentValue;
    }
    if (!!changes.isFront) {
      this.isFront = changes.isFront.currentValue;
    }
  }


}
