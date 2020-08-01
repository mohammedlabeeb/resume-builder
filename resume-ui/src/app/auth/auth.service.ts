import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { SnackbarService } from "./../shared/services/snackbar.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import Strapi from "strapi-sdk-javascript";
import { throwError } from "rxjs/internal/observable/throwError";
import { CurrentUserInfo } from "./auth.interface";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    apiURL: string = environment.authAPI;

    endPoints = {
        register: this.apiURL + "/auth/local/register",
        login: this.apiURL + "/auth/local",
        forgot: this.apiURL + "auth/forgot-password",
        reset: this.apiURL + "auth/reset-password",
    };

    constructor(private snackbar: SnackbarService, private _http: HttpClient) {}

    async login(identifier: string, password: string) {
        const response = await this._http
            .post(this.endPoints.login, {
                identifier,
                password,
            })
            .toPromise()
            .catch(this.handleError.bind(this));
        if (response && response["jwt"] && response["user"]) {
            this.setUserSession(response);
            return true;
        } else return false;
    }

    async register(username: string, email: string, password: string) {
        const response = await this._http
            .post(this.endPoints.register, {
                username,
                email,
                password,
            })
            .toPromise()
            .catch(this.handleError.bind(this));
        if (response && response["jwt"] && response["user"]) {
            this.setUserSession(response);
            return true;
        } else return false;
    }

    async forgotPassword(email: string, url: string) {
        await this._http
            .post(this.endPoints.forgot, {
                email,
                url,
            })
            .toPromise()
            .catch(this.handleError.bind(this));
    }

    async resetPassword(
        password: string,
        passwordConfirmation: string,
        code: string
    ) {
        await this._http
            .post(this.endPoints.reset, {
                code,
                password,
                passwordConfirmation,
            })
            .toPromise()
            .catch(this.handleError.bind(this));
    }

    private handleError(error: HttpErrorResponse) {
        let message = "Error in API";
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
            message = error.error.message;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`
            );
            message = error?.error?.message?.[0]?.messages?.[0]?.message;
        }
        this.snackbar.openErrorAlert(message);
        // return an observable with a user-facing error message
        return null;
    }

    private setUserSession(response) {
        const jwt = response["jwt"];
        const user = response["user"];
        const userinfo: CurrentUserInfo = {
            token: jwt,
            userid: user.id,
            email: user.email,
            username: user.username,
            blocked: user.blocked,
            confirmed: user.confirmed,
            role: {
                id: user.role.id,
                name: user.role.name,
            },
        };
        if (userinfo)
            sessionStorage.setItem("currentUserInfo", JSON.stringify(userinfo));
    }

    getUserSession() {
        const session = sessionStorage.getItem("currentUserInfo");
        return JSON.parse(session) as CurrentUserInfo;
    }

    hasUserSession() {
        const session = this.getUserSession();
        return session?.token && session?.userid ? true : false;
    }
}
