import { Directive,  ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSprite]'
})
export class SpriteDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.width = "32px";
    this.el.nativeElement.style.height = "32px";
    this.el.nativeElement.style.position = "absolute";
    this.el.nativeElement.style.top = "128px";
    this.el.nativeElement.style.backgroundColor = 'orangered'
  }

}
