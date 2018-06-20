import { Directive, ElementRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[basicHighLight]',
})
export class BasicHighlightDirective {
  constructor(private elementRef: ElementRef) {}


    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy() {

    }


}
