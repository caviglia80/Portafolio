import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { GlobalChecker } from 'src/app/app.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private img_dev: string[] = ['assets/carousel/dev.jpg', 'assets/carousel/tools.jpg'];
  private img_qa: string[] = ['assets/carousel/qa.jpg', 'assets/carousel/tools.jpg'];
  public img: string[] = [];

  constructor() { }

  ngOnInit() {
    try {
      this.img = AppComponent.currentUrl.includes('desarrollo') ? this.img_dev : this.img_qa;
      this.checkImages();
    } catch (error) {
      console.log(error);
    }
  }

  private async checkImages() {
    try {
      for (let i = 0; i < this.img.length; i++) {
        this.img[i] = await GlobalChecker.checkImageExists(this.img[i]);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
