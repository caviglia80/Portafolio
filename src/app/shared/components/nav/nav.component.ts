import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public imgLogo: string = 'assets/Logos/logo.png';
  public isCollapsed = true;

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

  public scrollTo(id: string): void {
    try {
      this.isCollapsed = true;
      const element = document.getElementById(id);
      if (element)
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
      console.log(error);
    }
  }
}
