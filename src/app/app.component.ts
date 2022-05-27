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

  ngAfterViewInit(): void {}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.scrolled = window.scrollY == 0 ? false : true;
  }
}
