import { AppRenderService } from "./../../shared/services/app-render.service";
import {
    Component,
    OnInit,
    ViewContainerRef,
    ViewChild,
    AfterViewInit,
    ElementRef,
} from "@angular/core";
import { RenderHostDirective } from "app/shared/directives/render-host.directive";

@Component({
    selector: "app-resume-preview",
    templateUrl: "./resume-preview.component.html",
    styleUrls: ["./resume-preview.component.scss"],
})
export class ResumePreviewComponent implements AfterViewInit {
    @ViewChild("previewFrame")
    previewFrame: ElementRef<HTMLIFrameElement>;
    constructor(private apprenderService: AppRenderService) {}

    ngAfterViewInit(): void {
        const viewContainerRef = this.previewFrame.nativeElement.contentWindow;
        setTimeout(() => {
            viewContainerRef.postMessage("Hello to iframe from parent!", "*");
        }, 5 * 1000);
    }
}
