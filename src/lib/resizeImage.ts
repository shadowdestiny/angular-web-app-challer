/**
 * @author lmarin
 * @date: 01/02/2020
 * */

export interface ResponsiveImage {
  width: number;
  outHeight: number;
}

export class ResizeImage {
  private defaultHeight = 844;
  private initWidth: number;
  private isFirstHeight = false;
  private newHeight = 0;
  private responsive: Array<ResponsiveImage> = [];

  constructor(
    defaultHeight = 844,
    initWidth = 1440,
    responsive: Array<ResponsiveImage> = []
  ) {
    this.defaultHeight = defaultHeight;
    this.initWidth = initWidth;
    this.responsive = responsive;
  }

  public getResizeHeight(resizeWidth: number): number {

    if (!this.isFirstHeight) {
      this.isFirstHeight = true;
      this.newHeight = this.defaultHeight;
    }

    if (resizeWidth >= this.initWidth) {
      return this.newHeight = (resizeWidth - this.initWidth) + this.defaultHeight;
    } else {
      return this.newHeight = this.getHeightResponsive(resizeWidth);
    }
  }

  private getHeightResponsive(resizeWidth: number): number {
    let height = this.defaultHeight;
    this.responsive.forEach((r: ResponsiveImage) => {
      if (resizeWidth <= r.width){
        height =  r.outHeight;
        return true;
      }
    });
    return height;
  }
}
