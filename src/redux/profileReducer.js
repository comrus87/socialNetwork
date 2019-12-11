import {profileApi} from './../api/api';

const ADD_POST= 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS ='profile/SET_STATUS';

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

		default:
			return state;
	}
}

export const addPost = (text) => ({type: ADD_POST, text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});


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


export default profileReducer