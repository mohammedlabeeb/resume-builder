import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: "root",
})
export class SnackbarService {
    DURATION = 2000;
    constructor(private _snackBar: MatSnackBar) {}
    openSuccessAlert(message: string) {
        this._snackBar.open(message, "", {
            duration: this.DURATION,
            panelClass: ["snack-success"],
        });
    }
    openInfoAlert(message: string) {
        this._snackBar.open(message, "", {
            duration: this.DURATION,
            panelClass: ["snack-info"],
        });
    }
    openWarningAlert(message: string) {
        this._snackBar.open(message, "", {
            duration: this.DURATION,
            panelClass: ["snack-warning"],
        });
    }
    openErrorAlert(message: string) {
        this._snackBar.open(message, "", {
            duration: this.DURATION,
            panelClass: ["snack-error"],
        });
    }
}
