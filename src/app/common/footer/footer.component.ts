import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onAbout() {
    this.router.navigate(['/about-us']);
  }

  onVision() {
    this.router.navigate(['/vision']);
  }

  onMision() {
    this.router.navigate(['/mision']);
  }

  onBusiness() {
    this.router.navigate(['/business']);
  }

  onCondition() {
    this.router.navigate(['/policy']);
  }

  onContact() {
    this.router.navigate(['/contact-join']);
  }

  onStory() {
    this.router.navigate(['/story']);
  }

  onPolicy() {
    this.router.navigate(['/privacypolicy']);
  }

  onLegal() {
    this.router.navigate(['/legal']);
  }

  onEula() {
    this.router.navigate(['/eula']);
  }

  onClickHome() {
    this.router.navigate(['/home']);
  }

  onClickInstagram() {
    window.location.href = environment.INSTAGRAM_LINK;
  }

  onClickTwitter() {
    window.location.href = environment.TWITTER_LINK;
  }

  onClickFacebook() {
    window.location.href = environment.FACEBOOK_LINK;
  }

  onClickYouTube() {
    window.location.href = environment.YOUTUBE_LINK;
  }
  onJoin(){

  }
}
