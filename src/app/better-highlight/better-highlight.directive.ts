import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[betterHighlight]',
})
export class BetterHighlightDirective implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private renderer: Renderer2, private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // forth argument is optional, we can sert !important in that argument
  }

}
