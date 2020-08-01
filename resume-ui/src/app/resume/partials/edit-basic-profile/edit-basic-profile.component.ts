import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-edit-basic-profile",
    templateUrl: "./edit-basic-profile.component.html",
    styleUrls: ["./edit-basic-profile.component.scss"],
})
export class EditBasicProfileComponent implements OnInit {
    // Private
    private _unsubscribeAll: Subject<any>;
    profileForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        // Reactive Form
        this.profileForm = this._formBuilder.group({
            fullName: ["", Validators.required],
            dateOfBirth: ["", Validators.required],
            sex: ["", Validators.required],
            avatar: [""],
            email: this._formBuilder.array([this.createEmail()]),
            phone: this._formBuilder.array([this.createPhone()]),
            address: this._formBuilder.array([this.createAddress()]),
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createEmail(): FormGroup {
        return this._formBuilder.group({
            type: ["", Validators.required],
            email: ["", Validators.required],
        });
    }

    createPhone(): FormGroup {
        return this._formBuilder.group({
            type: ["", Validators.required],
            countryCode: ["", Validators.required],
            phone: ["", Validators.required],
        });
    }

    createAddress(): FormGroup {
        return this._formBuilder.group({
            type: ["", Validators.required],
            address: ["", Validators.required],
            city: ["", Validators.required],
            state: ["", Validators.required],
            country: ["", Validators.required],
            zip: ["", Validators.required],
        });
    }
}
