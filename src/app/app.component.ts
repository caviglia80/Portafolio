import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'CV';
  private routerSubscription: Subscription | undefined;
  public static currentUrl: string = '';
  public currentUrl: string = '';
  public defaultLanguage: string = '';

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url.split('/').pop() ?? '';
        AppComponent.currentUrl = this.currentUrl;
      }
    });
  }

  ngOnInit() {
    this.defaultLanguage = navigator.language || 'es';
  }

  public isMain():boolean {
    return this.currentUrl.includes('main') || (this.currentUrl === '');
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }
}

export class GlobalVariables {
  public static wspNumer: string = '+5492364653595';
  public static wspTxt: string = '';
  public static linkedinUser: string = 'francisco-caviglia';
  public static githubUser: string = 'caviglia80';
}



