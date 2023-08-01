import { Component, HostListener, OnInit, Query } from '@angular/core';

@Component({
  selector: 'app-cursor-circle',
  templateUrl: './cursor-circle.component.html',
  styleUrls: ['./cursor-circle.component.css']
})
export class CursorCircleComponent implements OnInit {
  circleX: number = 0;
  circleY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.circleX = event.pageX;
    this.circleY = event.pageY;
  }

  ngOnInit(): void {
    const circles: HTMLElement[] = Array.from(document.getElementsByClassName('cursor') as HTMLCollectionOf<HTMLElement>);
    document.addEventListener("click", () => {
      if (circles.length > 0) {
        circles.forEach(circle => {
          circle.classList.add("big-and-fade-in-out");
          circle.addEventListener("animationend", () => {
            circle.classList.remove("big-and-fade-in-out");
          });
        });
      }
    });
  }

}
