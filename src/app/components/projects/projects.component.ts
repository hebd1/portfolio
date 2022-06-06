import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInLeftOnEnterAnimation,
  slideInRightOnEnterAnimation,
  slideInUpOnEnterAnimation,
  slideOutDownOnLeaveAnimation,
} from 'angular-animations';
import { BaseComponent } from '../base/base.component';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    slideInLeftOnEnterAnimation({ delay: 750, duration: 500 }),
    slideInRightOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ duration: 500 }),
    slideInUpOnEnterAnimation(),
    slideOutDownOnLeaveAnimation(),
  ],
})
export class ProjectsComponent extends BaseComponent {
  safeURL!: any;
  constructor(private _sanitizer: DomSanitizer) {
    super();
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/jU-PZBva-Ec?start=163'
    );
  }
}
