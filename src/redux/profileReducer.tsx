import {profileApi} from './../api/api';
import {stopSubmit} from 'redux-form';
import {postsType, contactsType, photosType, profileType} from './../types/types';

const ADD_POST= 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS ='profile/SET_STATUS';
const SET_PHOTO ='profile/SET_PHOTO';


let initialState = {
	posts: [
		{id: 1, message: "Hello, it's John", likesCount: 20},
		{id: 2, message: "Hello, it's Mike", likesCount: 15}
	] as Array<postsType>,

	profile: null as profileType | null,
	status: 'default'
}

type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {
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
				profile: {...state.profile, photos: action.photos} as profileType
			}

		default:
			return state;
	}
}

type AddPostType = {
	type: typeof ADD_POST,
	text: string
}

type SetUserProfileType = {
	type: typeof SET_USER_PROFILE,
	profile: profileType
}

type SetStatusType = {
	type: typeof SET_STATUS,
	status: string
}

type SetPhotoType = {
	type: typeof SET_PHOTO,
	photos: photosType
}

export const addPost = (text: string): AddPostType => ({type: ADD_POST, text});
export const setUserProfile = (profile: profileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});
export const setPhoto = (photos: photosType): SetPhotoType => ({type: SET_PHOTO, photos});


export const getProfile = (userId: number) => async (dispatch: any) => {
	 let data = await profileApi.getProfileUser(userId);
	  dispatch(setUserProfile(data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
	 let data = await profileApi.getStatus(userId);
	  dispatch(setStatus(data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
	 let response = await profileApi.updateStatus(status);
	 	if (response.resultCode === 0) {
	 		dispatch(setStatus(status));
	 	}
};

export const savePhoto = (file: any) => async (dispatch: any) => {
	 let response = await profileApi.savePhoto(file);
	 	if (response.resultCode === 0) {
	 		dispatch(setPhoto(response.data.photos));
	 	}
};

export const saveProfile = (profile: profileType) => async (dispatch: any, getState: any) => {
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