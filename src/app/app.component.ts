import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInDownAnimation,
  slideInDownOnEnterAnimation,
  slideInLeftOnEnterAnimation,
  slideInRightOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    slideInLeftOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
  ],
})
export class AppComponent {
  @ViewChild('testDiv', { static: false })
  private testDiv!: ElementRef<HTMLDivElement>;
  isVisible!: boolean;
  title = 'portfolio';
  scrolled!: boolean;

  ngAfterViewInit(): void {}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.scrolled = window.scrollY == 0 ? false : true;
    if (this.testDiv) {
      const rect = this.testDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;

      this.isVisible = topShown && bottomShown;
    }
  }
}
