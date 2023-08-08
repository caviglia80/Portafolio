import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-github-btn',
  templateUrl: './github-btn.component.html',
  styleUrls: ['./github-btn.component.css']
})
export class GithubBtnComponent implements AfterViewInit, OnDestroy {
  private onScroll: (() => void) | undefined;

  ngAfterViewInit() {
    try {
      const button: HTMLElement | null = document.getElementById('github-btn');
      this.onScroll = () => {
        if (button)
          if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight)
            button.classList.add('hidden');
          else
            button.classList.remove('hidden');
      };
      window.addEventListener('scroll', this.onScroll);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    try {
      if (this.onScroll)
        window.removeEventListener('scroll', this.onScroll);
    } catch (error) {
      console.log(error);
    }
  }

  redirectToGithub() {
    try {
      const webLink = "https://github.com/" + GlobalVariables.githubUser;
      setTimeout(() => { window.open(webLink, '_blank', 'noopener,noreferrer'); }, 100);
    } catch (error) {
      console.log(error);
    }
  }
}
