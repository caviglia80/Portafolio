import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.css']
})
export class TopButtonComponent implements OnInit {
  private button: HTMLElement | null = null;

  constructor() { }

  ngOnInit(): void {
    this.button = document.getElementById('top-button');

    if (this.button)
      this.button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

    window.addEventListener('scroll', () => {
      if (this.button)
        if (window.scrollY > 0)
          this.button.style.display = 'inline-block';
        else
          this.button.style.display = 'none';
    });
  }
}
