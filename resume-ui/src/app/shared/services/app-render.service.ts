import {
    Injectable,
    ComponentFactoryResolver,
    ViewContainerRef,
} from "@angular/core";
import { from } from "rxjs";
import { map, catchError } from "rxjs/operators";

export interface ComponentLoader {
    loadChildren: () => Promise<any>;
}

@Injectable({
    providedIn: "root",
})
export class AppRenderService {
    constructor(private cfr: ComponentFactoryResolver) {}

    forChild(vcr: ViewContainerRef, cl: ComponentLoader) {
        return from(cl.loadChildren()).subscribe((component: any) => {
            const a = vcr.createComponent(
                this.cfr.resolveComponentFactory(component)
            );
            return a;
        });
    }

    loadComponent(vcr: ViewContainerRef) {
        vcr.clear();

        return this.forChild(vcr, {
            loadChildren: this.getResumeComponent(),
        });
    }

    private getResumeComponent() {
        return () =>
            import(
                "assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example"
            ).then((m) => m.AutocompleteAutoActiveFirstOptionExample);
    }
}
