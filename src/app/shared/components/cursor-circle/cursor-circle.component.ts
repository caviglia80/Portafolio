import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor-circle',
  templateUrl: './cursor-circle.component.html',
  styleUrls: ['./cursor-circle.component.css']
})
export class CursorCircleComponent {
  circleX: number = 0;
  circleY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.circleX = event.pageX;
    this.circleY = event.pageY;
  }

}
