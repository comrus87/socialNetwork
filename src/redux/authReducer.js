import {authApi} from './../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}

		default:
			return state;
	}
}

export const setAuthUsersData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData = () => async (dispatch) => {
	let data = await authApi.getAuthData();
		if (data.resultCode === 0) {
			let {id, email, login} = data.data;
			dispatch(setAuthUsersData(id, email, login, true));
		}
};

export const login = (email, password, rememberMe) => async (dispatch) => {
	 let data = await authApi.login(email, password, rememberMe);
		if (data.resultCode === 0) {
			dispatch(getAuthUserData());
		} else {
			dispatch(stopSubmit('login', {_error: data.messages[0]} || 'Common error'))
		}
};

export const logout = () => async (dispatch) => {
	 let data = await authApi.logout();
		if (data.resultCode === 0) {
			dispatch(setAuthUsersData(null, null, null, false));
		}
};



export default authReducer