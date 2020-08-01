import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[appRenderHost]",
})
export class RenderHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}
