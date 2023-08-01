import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-linkedin-btn',
  templateUrl: './linkedin-btn.component.html',
  styleUrls: ['./linkedin-btn.component.css']
})
export class LinkedinBtnComponent implements AfterViewInit, OnDestroy {
  private onScroll: (() => void) | undefined;

  ngAfterViewInit() {
    const button: HTMLElement | null = document.getElementById('linkedin-btn');
    this.onScroll = () => {
      if (button)
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight)
          button.classList.add('hidden');
        else
          button.classList.remove('hidden');
    };
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy() {
    if (this.onScroll)
      window.removeEventListener('scroll', this.onScroll);
  }

  redirectToLn() {
    const webLink = "https://www.linkedin.com/in/" + GlobalVariables.linkedinUser;
    setTimeout(() => { window.open(webLink, '_blank', 'noopener,noreferrer'); }, 100);
  }
}
