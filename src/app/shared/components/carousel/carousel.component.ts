import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private img_dev: string[] = ['assets/carousel/dev.jpg', 'assets/carousel/tools.jpg'];
  private img_qa: string[] = ['assets/carousel/qa.jpg', 'assets/carousel/tools.jpg'];
  private img: string[] = [];

  constructor() { }

  public getImages(): string[] { return this.img; }

  ngOnInit() {
    this.img = AppComponent.currentUrl.includes('desarrollo') ? this.img_dev : this.img_qa;
  }
}
