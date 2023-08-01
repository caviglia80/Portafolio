import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'CV';
  public currentUrl: string = '';
  private routerSubscription: Subscription | undefined;
  private onScroll: (() => void) | undefined;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.currentUrl = event.url;
    });
  }

  ngAfterViewInit() {
    const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.leftButtons');
    this.onScroll = () => {
      if (buttons.length > 0) {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight)
          buttons.forEach(button => { button.style.display = 'none'; });
        else
          buttons.forEach(button => { button.style.display = 'inline-block'; });
      }
    };
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
    if (this.onScroll)
      window.removeEventListener('scroll', this.onScroll);
  }
}

export class GlobalVariables {
  public static wspNumer: string = '+5492364653595';
  public static wspTxt: string = '';
  public static linkedinUser: string = 'francisco-caviglia';
  public static githubUser: string = 'caviglia80';
}



