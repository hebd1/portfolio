import { Component, HostListener, ViewChild } from '@angular/core';
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
  $cssval: any;
  $htmlval: any;
  $javascriptval: any;
  $goval: any;

  ngAfterViewInit(): void {
    this.$cssval = this.getProgressTimer(80);
    this.$htmlval = this.getProgressTimer(90);
    this.$javascriptval = this.getProgressTimer(75);
    this.$goval = this.getProgressTimer(80);
  }

  public getProgressTimer(limit: number): any {
    return timer(0, 25).pipe(
      map((progress) => (progress * 5 < 100 ? progress * 5 : 100)),
      takeWhile((progress) => progress <= limit)
    );
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.scrolled = window.scrollY == 0 ? false : true;
  }
}
