import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  scrolled!: boolean;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.scrolled = window.scrollY == 0 ? false : true;
  }
}
