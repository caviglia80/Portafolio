import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'CV';
  public currentUrl: string = '';
  private routerSubscription: Subscription | undefined;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.currentUrl = event.url;
    });
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



