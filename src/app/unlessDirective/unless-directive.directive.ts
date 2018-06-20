import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirectiveDirective {

  @Input() set unless(condition: boolean) {
    // implements setter to turn property into a method.
    // it is still a property but just a setter of that property
    if (!condition) {
      // do something here
      this.vcRef.createEmbeddedView(this.templateRef);  // create a new view in the view container display templateRef
                                                       // content in this new view
    } else {
      // do something else here
    this.vcRef.clear();
    }
}


// templateRef = what the content is, vcRef == where it exists on the domain
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
