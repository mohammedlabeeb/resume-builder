export interface CurrentUserInfo {
    token: string;
    userid: string;
    username: string;
    email: string;
    confirmed: boolean;
    blocked: boolean;
    role: {
        id: string;
        name: string;
    };
}
