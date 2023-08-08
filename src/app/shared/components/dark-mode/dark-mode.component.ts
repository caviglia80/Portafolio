import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.OnlyOnInitialize();
    this.OnChange();
  }

  private OnChange(): void {
    try {
      const toggleElement = document.getElementById("darkmode-toggle");
      if (toggleElement)
        toggleElement.addEventListener('change', () => {
          if (localStorage.getItem('darkModeEnabled') === 'true') {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkModeEnabled', 'false');
          }
          else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkModeEnabled', 'true');
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  private OnlyOnInitialize(): void {
    try {
      const darkModeToggle = document.getElementById('darkmode-toggle') as HTMLInputElement;
      if (localStorage.getItem('darkModeEnabled') === 'true') {
        if (!darkModeToggle.checked) {
          darkModeToggle.checked = !darkModeToggle.checked;
          darkModeToggle.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        }
        document.body.classList.add('dark-mode');
      }
      else {
        if (darkModeToggle.checked) {
          darkModeToggle.checked = !darkModeToggle.checked;
          darkModeToggle.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        }
        document.body.classList.remove('dark-mode');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
