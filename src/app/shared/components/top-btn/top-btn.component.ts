import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-btn',
  templateUrl: './top-btn.component.html',
  styleUrls: ['./top-btn.component.css']
})
export class TopBtnComponent implements OnInit {
  private button: HTMLElement | null = null;

  constructor() { }

  ngOnInit(): void {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }
}
