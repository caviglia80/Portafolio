import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GlobalChecker } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public imgLogo: string = 'assets/cavigliaLogo.png';
  public isCollapsed = true;

  constructor(public router: Router, private elementRef: ElementRef) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCollapsed = true;
      }
    });
  }

  ngOnInit(): void {
    this.checkImages();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isCollapsed = true;
    }
  }

  private async checkImages() {
    this.imgLogo = await GlobalChecker.checkImageExists(this.imgLogo);
  }

  public scrollTo(id: string): void {
    this.isCollapsed = true;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
