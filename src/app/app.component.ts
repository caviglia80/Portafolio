import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'CV';
  private routerSubscription: Subscription | undefined;
  public static currentUrl: string = '';
  public defaultLanguage: string = '';

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        AppComponent.currentUrl = event.url.split('/').pop() ?? '';
      }
    });
  }

  ngOnInit() {
    this.defaultLanguage = navigator.language || 'es';
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }

  public isMain(): boolean {
    return AppComponent.currentUrl.includes('main') || (AppComponent.currentUrl === '');
  }
}

@Injectable()
export class GlobalVariables {
  public static wspNumer: string = '+5492364653595';
  public static wspTxt: string = '';
  public static linkedinUser: string = 'francisco-caviglia';
  public static githubUser: string = 'caviglia80';
}

export class GlobalChecker {
  static async checkImageExists(imageUrl: string): Promise<string> {
    try {
      const response = await fetch(imageUrl);
      return response.ok ? imageUrl : 'assets/error.svg';
    } catch (error) {
      return 'assets/error.svg';
    }
  }
}
