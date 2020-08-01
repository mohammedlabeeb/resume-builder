import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragAndDropDirective } from "./directives/drag-and-drop.directive";
import { FileUploaderComponent } from "./componenets/file-uploader/file-uploader.component";
import { MatIconModule } from "@angular/material/icon";
import { ImageCropperComponent } from "./componenets/image-cropper/image-cropper.component";
import { ImageCropperModule } from "ngx-image-cropper";
import { RenderHostDirective } from "./directives/render-host.directive";

const EXPORTEDITEMS = [
    DragAndDropDirective,
    FileUploaderComponent,
    ImageCropperComponent,
    RenderHostDirective,
];

@NgModule({
    declarations: [...EXPORTEDITEMS],
    imports: [
        CommonModule,
        MatIconModule,
        FormsModule,
        MatProgressBarModule,
        MatButtonModule,
        ImageCropperModule,
    ],
    exports: [...EXPORTEDITEMS],
})
export class SharedModule {}
