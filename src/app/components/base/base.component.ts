import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInLeftOnEnterAnimation,
  slideInUpOnEnterAnimation,
  slideOutDownOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    slideInLeftOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ duration: 500 }),
    slideInUpOnEnterAnimation(),
    slideOutDownOnLeaveAnimation(),
  ],
})
export class BaseComponent {
  @ViewChild('watchVisible', { static: false })
  private watchVisible!: ElementRef<HTMLDivElement>;
  isVisible!: boolean;
  title = 'portfolio';
  scrolled!: boolean;

  ngAfterViewInit(): void {}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.scrolled = window.scrollY == 0 ? false : true;
    if (this.watchVisible) {
      const rect = this.watchVisible.nativeElement.getBoundingClientRect();
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isVisible = bottomShown;
    }
  }
}
