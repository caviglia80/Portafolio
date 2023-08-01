import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-linkedin-btn',
  templateUrl: './linkedin-btn.component.html',
  styleUrls: ['./linkedin-btn.component.css']
})
export class LinkedinBtnComponent {

  redirectToLn() {
    const webLink = "https://www.linkedin.com/in/" + GlobalVariables.linkedinUser;
    window.open(webLink, '_blank', 'noopener,noreferrer');
  }
}
