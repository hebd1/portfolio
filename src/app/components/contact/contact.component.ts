import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInLeftOnEnterAnimation,
  slideInRightOnEnterAnimation,
  slideInUpOnEnterAnimation,
  slideOutDownOnLeaveAnimation,
} from 'angular-animations';
import { ContactService } from 'src/app/services/contact.service';
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
export class ContactComponent extends BaseComponent implements OnInit {
  FormData!: FormGroup;
  constructor(private builder: FormBuilder, private contact: ContactService) {
    super();
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Subject: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.email, Validators.required]),
      Message: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit(FormData: any) {
    console.log(FormData);
    this.contact.PostMessage(FormData).subscribe(
      (res) => {
        location.href = 'https://mailthis.to/confirm';
        console.log(res);
      },
      (error) => {
        console.warn(error.text);
        console.log({ error });
      }
    );
  }
}
