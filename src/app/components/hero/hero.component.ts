import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInLeftOnEnterAnimation,
  slideInUpOnEnterAnimation,
  slideOutDownOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    slideInLeftOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ duration: 500 }),
    slideInUpOnEnterAnimation(),
    slideOutDownOnLeaveAnimation(),
  ],
})
export class HeroComponent {
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
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isVisible = bottomShown;
    }
  }
}
