import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  loaded: boolean = false;
  exitBack: boolean = false;
  exit: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.presentacion();
  }

  private presentacion() {
    setTimeout(() => {
      this.loaded = true;
      setTimeout(() => {
        this.exitBack = true;
        setTimeout(() => {
          this.exit = true;
        }, 800);
      }, 800);
    }, 250);
  }

}
