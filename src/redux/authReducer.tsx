import {authApi, securityApi} from './../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

type InitialStateType = {
	userId: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean,
	captchaUrl: string | null
}

let initialState: InitialStateType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
}

const authReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_CAPTCHA_URL:
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}

		default:
			return state;
	}
}

type SetAuthUsersDataActionPayloadType = {
	userId: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean
}


type SetAuthUsersDataActionType = {
	type: typeof SET_USER_DATA,
	payload: SetAuthUsersDataActionPayloadType
}

export const setAuthUsersData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUsersDataActionType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

type setCaptchaUrlActionType = {
	type: typeof SET_CAPTCHA_URL,
	payload: {captchaUrl: string}
}

export const setCaptchaUrl = (captchaUrl: string): setCaptchaUrlActionType => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}});


export const getAuthUserData = () => async (dispatch: any) => {
	let data = await authApi.getAuthData();
		if (data.resultCode === 0) {
			let {id, email, login} = data.data;
			dispatch(setAuthUsersData(id, email, login, true));
		}
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
	 let data = await authApi.login(email, password, rememberMe, captcha);
		if (data.resultCode === 0) {
			dispatch(getAuthUserData());
		} else {
			if (data.resultCode === 10) {
				dispatch(getCaptchaUrl());
			}
			dispatch(stopSubmit('login', {_error: data.messages[0]} || 'Common error'))
		}
};

export const logout = () => async (dispatch: any) => {
	 let data = await authApi.logout();
		if (data.resultCode === 0) {
			dispatch(setAuthUsersData(null, null, null, false));
		}
};

export const getCaptchaUrl = () => async (dispatch: any) => {
	 let response = await securityApi.getCaptcha();
	 let captchaUrl = response.url;
	 dispatch(setCaptchaUrl(captchaUrl));
};




export default authReducer