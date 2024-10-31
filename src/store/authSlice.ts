import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export interface LoginInterface {
    email: string;
    password: string;
}

export interface ForgotPasswordInterface {
    email: string;
}

export interface RegisterInterface {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface VerifyEmailInterface {
    email: string;
    token: string;
}

export interface ResendEmailVerificationLinkInterface {
    email: string;
    redirectTo: string;
}

export interface ResetPasswordInterface {
    newPassword: string;
    confirmPassword: string;
    token: string;
}

interface State {
    login: LoginInterface,
    forgotPassword: ForgotPasswordInterface,
    register: RegisterInterface,
    verifyEmail: VerifyEmailInterface
    resendEmailVerificationLink: ResendEmailVerificationLinkInterface
    resetPassword: ResetPasswordInterface
}

export const authInitialState: State = {
    login: {
        email: '',
        password: '',
    },
    forgotPassword: {
        email: '',
    },
    register: {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    verifyEmail: {
        email: '',
        token: '',
    },
    resendEmailVerificationLink: {
        email: '',
        redirectTo: '',
    },
    resetPassword: {
        newPassword: '',
        confirmPassword: '',
        token: '',
    },
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {},
})

export const authReducer = authSlice.reducer;
