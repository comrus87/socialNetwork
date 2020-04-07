import {authApi, securityApi} from './../api/api';
import {stopSubmit} from 'redux-form';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';

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

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
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

type setCaptchaUrlActionType = {
	type: typeof SET_CAPTCHA_URL,
	payload: {captchaUrl: string}
}

type ActionTypes = SetAuthUsersDataActionType | setCaptchaUrlActionType;

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const setAuthUsersData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUsersDataActionType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const setCaptchaUrl = (captchaUrl: string): setCaptchaUrlActionType => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}});


export const getAuthUserData = (): ThunkType => async (dispatch) => {
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

export const logout = (): ThunkType => async (dispatch) => {
	 let data = await authApi.logout();
		if (data.resultCode === 0) {
			dispatch(setAuthUsersData(null, null, null, false));
		}
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
	 let response = await securityApi.getCaptcha();
	 let captchaUrl = response.url;
	 dispatch(setCaptchaUrl(captchaUrl));
};




export default authReducer