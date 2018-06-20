import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[betterHighlight]',
})
export class BetterHighlightDirective implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private renderer: Renderer2, private elementRef: ElementRef
  ) { }

// @hostindingb

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  // bind to host property using hostBinding
  // define in string
  // camelCase property name because we are accessing domp property not css
// the event that we are sl

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // forth argument is optional, we can sert !important in that argument
  }

  @HostListener('mouseenter') mouseEnter() { // hostlistener decorator is added to a method we want to execute on an event;
  // listening for mouseenter on host

  this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseOut() {

    this.backgroundColor = 'red';

  }

}


// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');

// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
