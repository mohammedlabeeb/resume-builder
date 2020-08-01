import { FuseConfigService } from "@fuse/services/config.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-edit-resume",
    templateUrl: "./edit-resume.component.html",
    styleUrls: ["./edit-resume.component.scss"],
})
export class EditResumeComponent implements OnInit {
    constructor(private _fuseConfigService: FuseConfigService) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                footer: {
                    hidden: true,
                },
                sidepanel: {
                    hidden: true,
                },
            },
        };
    }

    ngOnInit(): void {}
}
