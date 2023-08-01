import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-github-btn',
  templateUrl: './github-btn.component.html',
  styleUrls: ['./github-btn.component.css']
})
export class GithubBtnComponent {

  redirectToGithub() {
    const webLink = "https://github.com/" + GlobalVariables.githubUser;
    window.open(webLink, '_blank', 'noopener,noreferrer');
  }
}
