import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CV';
  constructor(private router: Router) { }
  public isMainRoute(): boolean { return this.router.url.includes('main');}
}

export class GlobalVariables {
  public static wspNumer:string = '+5492364653595';
  public static wspTxt:string = '';
  public static linkedinUser:string = 'francisco-caviglia';
  public static githubUser:string = 'caviglia80';
}