import {profileApi} from './../api/api';
import {stopSubmit} from 'redux-form';

const ADD_POST= 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS ='profile/SET_STATUS';
const SET_PHOTO ='profile/SET_PHOTO';

let initialState = {
	posts: [
		{id: 1, message: "Hello, it's John", likesCount: 20},
		{id: 2, message: "Hello, it's Mike", likesCount: 15}
	],

	profile: null,
	status: 'default'
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
		let valueMessage = action.text;

			return {
				...state,
				posts: [...state.posts, {id: 5, message: valueMessage, likesCount: 17}]
			};

		case SET_USER_PROFILE: 
			return {
				...state,
				profile: action.profile
			}

		case SET_STATUS: 
			return {
				...state,
				status: action.status
			}

		case SET_PHOTO: 
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
			}

		default:
			return state;
	}
}

export const addPost = (text) => ({type: ADD_POST, text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});
export const setPhoto = photos => ({type: SET_PHOTO, photos});


export const getProfile = (userId) => async (dispatch) => {
	 let data = await profileApi.getProfileUser(userId);
	  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
	 let data = await profileApi.getStatus(userId);
	  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
	 let response = await profileApi.updateStatus(status);
	 	if (response.resultCode === 0) {
	 		dispatch(setStatus(status));
	 	}
};

export const savePhoto = (file) => async (dispatch) => {
	 let response = await profileApi.savePhoto(file);
	 	if (response.resultCode === 0) {
	 		dispatch(setPhoto(response.data.photos));
	 	}
};

export const saveProfile = (profile) => async (dispatch, getState) => {
	 let userId = getState().auth.userId;
	 let response = await profileApi.saveProfile(profile);
	 	if (response.resultCode === 0) {
	 		dispatch(getProfile(userId));
	 	} else {
	 		let fieldError = response.messages[0].slice(30, -1);
			dispatch(stopSubmit('editProfile', {_error: 'Ошибка в поле ' + fieldError}));
			return Promise.reject('Ошибка в поле ' + fieldError);
	 	}
};




export default profileReducer