import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnDestroy {
  @Input()
  public title: string = '';
  @Input()
  public text: string = '';
  @Input()
  public link: string = '';
  @Input()
  public linkTxt: string = '';

  public secondsLeft: number = 10;
  private timerSubscription: Subscription | undefined;

  constructor() {
    try {
      const timer$ = interval(1000).pipe(
        take(this.secondsLeft)
      );
  
      this.timerSubscription = timer$.subscribe(() => {
        this.secondsLeft--;
  
        if (this.secondsLeft === 0) {
          this.closeToast();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    try {
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
    } catch (error) {
      console.log(error);
    }
  }

  closeToast() {
    try {
      const toast: HTMLElement | null = document.getElementById('toast');
      if (toast)
        toast.classList.add('hidden');
    } catch (error) {
      console.log(error);
    }
  }
}
