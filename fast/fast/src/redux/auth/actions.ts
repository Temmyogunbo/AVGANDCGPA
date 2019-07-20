import {authActionTypes} from './types';

export const signupWithoutPassReq = (req: {email: string}) => ({type: authActionTypes.SIGN_UP_WITHOUT_PASSWORD_REQUEST, req});

export const signupWithoutPassFailure = (error: any) => ({error, type: authActionTypes.SIGN_UP_WITHOUT_PASSWORD_FAILURE});

export const signupWithoutPassSuccess = (payload: any) => ({payload, type: authActionTypes.SIGN_UP_WITHOUT_PASSWORD_SUCCESS});
