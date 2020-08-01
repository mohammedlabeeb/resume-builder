import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditResumeComponent } from "./edit-resume/edit-resume.component";
import { ListResumeComponent } from "./list-resume/list-resume.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { EditBasicProfileComponent } from "./partials/edit-basic-profile/edit-basic-profile.component";
import { EditAddressComponent } from "./partials/edit-address/edit-address.component";
import { SharedModule } from "app/shared/shared.module";
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';

const routes = [
    {
        path: "",
        redirectTo: "list",
    },
    {
        path: "list",
        component: ListResumeComponent,
    },
    {
        path: "edit",
        component: EditResumeComponent,
    },
];

@NgModule({
    declarations: [
        EditResumeComponent,
        ListResumeComponent,
        EditProfileComponent,
        EditBasicProfileComponent,
        EditAddressComponent,
        ResumePreviewComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatTabsModule,
        MatStepperModule,
        MatIconModule,
        FlexLayoutModule,
        FormsModule,
        MatTooltipModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        SharedModule,
    ],
})
export class ResumeModule {}
