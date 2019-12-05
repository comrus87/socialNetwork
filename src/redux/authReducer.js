import {authApi} from './../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

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

export const getAuthUserData = () => (dispatch) => {
	return authApi.getAuthData().then(data => {
		if (data.resultCode === 0) {
			let {id, email, login} = data.data;
			dispatch(setAuthUsersData(id, email, login, true));
		}
	})
};

export const login = (email, password, rememberMe) => (dispatch) => {
	 authApi.login(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			dispatch(getAuthUserData());
		} else {
			dispatch(stopSubmit('login', {_error: data.messages[0]} || 'Common error'))
		}
	})
};

export const logout = () => (dispatch) => {
	 authApi.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUsersData(null, null, null, false));
		}
	})
};



export default authReducer