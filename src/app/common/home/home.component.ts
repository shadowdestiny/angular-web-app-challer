import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  toGoogle(){
    window.location.href = 'https://play.google.com/store/apps/details?id=com.challer';
  }

  onViewChaller() {
    this.router.navigate(['/home-challer']);
  }

}
