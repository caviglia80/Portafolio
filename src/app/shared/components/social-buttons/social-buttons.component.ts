import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css']
})
export class SocialButtonsComponent implements AfterViewInit, OnDestroy {
  private onScroll: (() => void) | undefined;

  ngAfterViewInit() {
    try {
      const button: HTMLElement | null = document.getElementById('social-btn');

      this.onScroll = () => {
        if (window.innerWidth < 768) {
          const currentScroll: number = ~~(window.scrollY + window.innerHeight);
          const beforeFooter: number = ~~(document.documentElement.scrollHeight * .86);

          if (button)
            if (currentScroll >= beforeFooter)
              button.classList.add('hidden');
            else
              button.classList.remove('hidden');
        }
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

  redirectToWsp() {
    try {
      const webLink = "https://wa.me/" + GlobalVariables.wspNumer;
      setTimeout(() => { window.open(webLink, '_blank', 'noopener,noreferrer'); }, 100);
    } catch (error) {
      console.log(error);
    }
  }

  redirectToLn() {
    try {
      const webLink = "https://www.linkedin.com/in/" + GlobalVariables.linkedinUser;
      setTimeout(() => { window.open(webLink, '_blank', 'noopener,noreferrer'); }, 100);
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
