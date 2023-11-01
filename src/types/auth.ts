export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserDetails extends IUser{
    id: string;
    token: string;
}

export type UserLoginData = Pick<IUser, 'email' | 'password'>;
export type UserRegisterData = IUser;
export type UserLogoutData = Pick<IUserDetails, 'id' | 'token'>;