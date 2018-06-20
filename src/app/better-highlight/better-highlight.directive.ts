import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[betterHighlight]',
})
export class BetterHighlightDirective implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private renderer: Renderer2, private elementRef: ElementRef
  ) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // forth argument is optional, we can sert !important in that argument
  }

  @HostListener('mouseenter') mouseEnter() { // hostlistener decorator is added to a method we want to execute on an event;
  // listening for mouseenter on host

  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseOut() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');

  }

}
