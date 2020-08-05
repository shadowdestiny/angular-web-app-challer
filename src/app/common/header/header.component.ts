import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false;

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onClickMenu() {
    this.isOpen = !this.isOpen;
  }

  onHome() {
    this.isOpen = false;
    this.router.navigate(['/']);
  }

  onAbout() {
    this.isOpen = false;
    this.router.navigate(['/about-us']);
  }
  onPolicy() {
    this.isOpen = false;
    this.router.navigate(['/policy']);
  }

}
