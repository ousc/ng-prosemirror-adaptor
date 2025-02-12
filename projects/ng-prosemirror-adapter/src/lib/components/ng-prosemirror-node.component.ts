import {Directive, ElementRef, Input, ViewChild} from "@angular/core";
import {NgProsemirrorAdapterProvider} from "../ng-prosemirror-adapter.component";

@Directive({
  selector: 'ng-prosemirror-node',
  standalone: true
})
export abstract class NgProsemirrorNode {
  @Input() public key: string;
  @Input() public provider: NgProsemirrorAdapterProvider;
  @ViewChild("contentRef", {static: true}) contentRef: ElementRef = null;

  constructor(public el: ElementRef) {}

  get context() {
    return this.provider?.service?.nodeViewContext?.[this.key];
  }

  get view() {
    return this.context?.view;
  }

  get getPos() {
    return this.context?.getPos;
  }

  get setAttrs() {
    return this.context?.setAttrs;
  }

  get node() {
    return this.context?.node;
  }

  get selected() {
    return this.context?.selected;
  }

  get decorations() {
    return this.context?.decorations;
  }

  get innerDecorations(){
    return this.context?.innerDecorations;
  }

  get parentView() {
    return this.provider.service.nodeView?.[this.key].dom;
  }

  get container(): HTMLElement {
    return (this.contentRef || this.el).nativeElement;
  }

  onUpdate() {}
}
