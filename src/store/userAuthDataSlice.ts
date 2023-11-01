import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface IUserPersonalCredentials {
    email: string | null;
    token: string | null;
    id: string | null;
}
export interface IUserAuthData {
    isUserLogin: boolean;
    authData: IUserPersonalCredentials;
    isAuthBarActive: boolean;
}

const initialState: IUserAuthData = {
    isUserLogin: false,
    isAuthBarActive: false,
    authData: {
        email: null,
        token: null,
        id: null,
    }
};

export const userAuthDataSlice = createSlice({
    name: 'user-auth-data',
    initialState,
    reducers: {
        changeLoginStatus: (state, action: PayloadAction<boolean>) => {
            state.isUserLogin = action.payload;
        },

        setUserData: (state, action: PayloadAction<IUserPersonalCredentials>) => {
            state.authData = action.payload;
        },

        setAuthBarStatus: (state, action: PayloadAction<boolean>) => {
            state.isAuthBarActive = action.payload;
        },
        
        clearUserData: (state) => {
            state.authData = initialState.authData;
        }
    }
});

export const { changeLoginStatus, setUserData, setAuthBarStatus, clearUserData } = userAuthDataSlice.actions;

const userAuthDataPersistConfig = {
    key: 'user-auth-data',
    storage,
};
export const userAuthDataPersistedReducer = persistReducer(userAuthDataPersistConfig, userAuthDataSlice.reducer);