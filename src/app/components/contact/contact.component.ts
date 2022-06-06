import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInLeftOnEnterAnimation,
  slideInRightOnEnterAnimation,
  slideInUpOnEnterAnimation,
  slideOutDownOnLeaveAnimation,
} from 'angular-animations';
import { AboutComponent } from '../about/about.component';
import { BaseComponent } from '../base/base.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    slideInLeftOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ duration: 500 }),
    slideInUpOnEnterAnimation(),
    slideOutDownOnLeaveAnimation(),
    slideInRightOnEnterAnimation(),
  ],
})
export class ContactComponent extends BaseComponent {}
