import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appProgress]',
})
export class ProgressDirective implements OnInit {
  @Input()
  appProgress!: number;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.width = this.appProgress + '%';
  }
}
