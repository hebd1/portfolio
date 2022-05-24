import { Component, HostListener, ViewChild } from '@angular/core';
import {
  MatProgressBar,
  ProgressAnimationEnd,
} from '@angular/material/progress-bar';
import {
  delay,
  distinctUntilChanged,
  interval,
  map,
  Observable,
  of,
  startWith,
  switchMap,
  take,
  takeWhile,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  scrolled!: boolean;
  $progressval: any;
  @ViewChild(MatProgressBar) progressBar!: MatProgressBar;

  ngAfterViewInit(): void {
    this.$progressval = this.getProgressTimer(90);
  }

  public getProgressTimer(limit: number): Observable<any> {
    return timer(0, 25).pipe(
      map((progress) => (progress * 5 < 100 ? progress * 5 : 100)),
      takeWhile((progress) => progress <= limit)
    );
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.scrolled = window.scrollY == 0 ? false : true;
  }
}
