import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';

@Directive({
  selector: '[appProgress]',
})
export class ProgressDirective implements OnInit {
  @Input()
  appProgress!: number;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    timer(0, 25)
      .pipe(
        map((progress) => (progress * 5 < 100 ? progress * 5 : 100)),
        takeWhile((progress) => progress <= this.appProgress)
      )
      .subscribe((val) => {
        this.el.nativeElement.style.width = val + '%';
      });
  }
}
