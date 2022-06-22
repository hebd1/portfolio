import { ɵgetParentElement } from '@angular/animations/browser';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInLeftOnEnterAnimation,
  slideInUpOnEnterAnimation,
  slideOutDownOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    slideInLeftOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ duration: 500 }),
    slideInUpOnEnterAnimation(),
    slideOutDownOnLeaveAnimation(),
  ],
})
export class AppComponent {
  scrolled!: boolean;

  ngAfterViewInit(): void {}

  public highlightNavItem(e: any): void {
    let element = e.srcElement;
    let parent = element.parentElement.parentElement;

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children[0].classList.contains('active')) {
        element.parentElement.parentElement.children[
          i
        ].children[0].classList.remove('active');
      }
    }
    element.classList.add('active');
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.scrolled = window.scrollY == 0 ? false : true;
  }
}
