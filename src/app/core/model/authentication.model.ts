declare namespace Authentication {

    export interface LoginPayload {
        email: string;
        password: string;
        // role: string;
    }

    export interface SignupPayload {
        email: string;
        password: string;
        cPassword: string;
        role: string;
    }

    export interface User {
        sub: string;
        nickname: string;
        name: string;
        picture: any;
        updated_at: Date;
        email: string;
        email_verified: boolean;
        firstName: string;
        lastName: string;
    }

    export interface Credentials {
        user: User;
        access_token: string;
        id_token: string;
        role: any;
        client: any;
    }
}
