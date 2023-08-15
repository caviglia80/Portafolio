import { Component, OnInit } from '@angular/core';
import { GVariableService } from '@services/gVariable/g-variable.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})

export class DarkModeComponent implements OnInit {

  constructor(private gVariableService: GVariableService) { }

  ngOnInit(): void {
    /* if (!localStorage.getItem('darkModeEnabled')) this.gVariableService.darkModeState = this.gVariableService.darkModeDefault; */
    this.OnlyOnInitialize();
    this.OnChange();
  }

  private OnlyOnInitialize(): void {
    try {
      /*  this.gVariableService.darkModeState = localStorage.getItem('darkModeEnabled') === 'true'; */
      const darkModeToggle = document.getElementById('darkmode-toggle') as HTMLInputElement;
      if (this.gVariableService.darkModeState) {
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

  private OnChange(): void {
    try {
      const toggleElement = document.getElementById("darkmode-toggle");
      if (toggleElement)
        toggleElement.addEventListener('change', () => {
          /* this.gVariableService.darkModeState = localStorage.getItem('darkModeEnabled') === 'true'; */
          if (this.gVariableService.darkModeState) {
            document.body.classList.remove('dark-mode');
            /*             localStorage.setItem('darkModeEnabled', 'false'); */
            this.gVariableService.darkModeState = false;
          }
          else {
            document.body.classList.add('dark-mode');
            /*             localStorage.setItem('darkModeEnabled', 'true'); */
            this.gVariableService.darkModeState = true;
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
}