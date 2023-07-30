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

  isMainRoute() { return this.router.url === '/main'; }
}
