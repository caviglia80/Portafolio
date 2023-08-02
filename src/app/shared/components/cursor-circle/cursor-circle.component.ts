import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor-circle',
  templateUrl: './cursor-circle.component.html',
  styleUrls: ['./cursor-circle.component.css']
})
export class CursorCircleComponent implements OnInit {
  private circles: HTMLElement[] = Array.from(document.getElementsByClassName('cursor') as HTMLCollectionOf<HTMLElement>);
  public circleX: number = 0;
  public circleY: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.circles = Array.from(document.getElementsByClassName('cursor') as HTMLCollectionOf<HTMLElement>);
    document.addEventListener("click", () => {
      if (this.circles.length > 0) {
        this.circles.forEach(circle => {
          circle.classList.add("big-and-fade-in-out");
          circle.addEventListener("animationend", () => {
            circle.classList.remove("big-and-fade-in-out");
          });
        });
      }
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const limit = this.circles[0].getBoundingClientRect().width * 1.4 + event.pageX;
    if (limit < window.innerWidth)
      this.circleX = event.pageX;
    this.circleY = event.pageY;
  }
}
