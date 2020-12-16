import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onAbout(){
    this.router.navigate(['/about-us']);
  }
  onVision(){
    this.router.navigate(['/vision']);
  }
  onMision(){
    this.router.navigate(['/mision']);
  }
  onBusiness(){
    this.router.navigate(['/business']);
  }
  onCondition(){
    this.router.navigate(['/policy']);
  }
  onContact(){
    this.router.navigate(['/contact']);
  }
  onStory(){
    this.router.navigate(['/story']);
  }
  onPolicy(){
    this.router.navigate(['/policy']);
  }
  onClickHome(){
    this.router.navigate(['/home']);
  }
}
