import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  private img_dev: string[] = ['assets/carousel/devslide1.jpg', 'assets/carousel/devslide2.jpg'];
  private img_qa: string[] = ['assets/carousel/qaslide1.jpg', 'assets/carousel/qaslide2.jpg'];

  constructor(private router: Router) { }
  public getImages(): string[] {return this.router.url.includes('desarrollo') ? this.img_dev : this.img_qa; }
}
