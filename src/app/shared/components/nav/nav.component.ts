import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GlobalChecker } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public imgLogo: string = 'assets/Logos/logo.png';
  public isCollapsed = true;

  /*   public isScaled: boolean = false; */

  constructor(public router: Router, private elementRef: ElementRef) {
    try {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isCollapsed = true;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.checkImages();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    try {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.isCollapsed = true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async checkImages() {
    try {
      this.imgLogo = await GlobalChecker.checkImageExists(this.imgLogo);
    } catch (error) {
      console.log(error);
    }
  }

  public scrollTo(id: string): void {
    try {
      this.isCollapsed = true;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });


        element.classList.add('ShowDiv');
        setTimeout(() => {
          element.classList.remove('ShowDiv');
        }, 500);
      }








    } catch (error) {
      console.log(error);
    }
  }
}
