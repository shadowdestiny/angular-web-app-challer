export class Media {
  static image(e): any {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const type = file.type;
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
    return reader;
  }

  static video(e): any {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /video-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
    return reader;
  }

  static getLongType(result: any): string {
    let type = result.toString().split(';')[0];
    type = type.toString().split(':');
    return type[1];
  }

  static getShortType(result: any): string {
    let type = result.toString().split(';')[0];
    type = type.toString().split(':');
    return type[1].split('/')[1];
  }

  static _handleReaderLoaded(e) {
    const reader = e.target;
    const videoSrc = reader.result;
  }
}
