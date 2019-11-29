const ADD_POST= 'ADD-POST';
const UPDATE_POST= 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	posts: [
		{id: 1, message: "Hello, it's John", likesCount: 20},
		{id: 2, message: "Hello, it's Mike", likesCount: 15}
	],

	valuePost: '',
	profile: null
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
		let valueMessage = state.valuePost;

			return {
				...state,
				valuePost: '',
				posts: [...state.posts, {id: 5, message: valueMessage, likesCount: 17}]
			};

		case UPDATE_POST: 
			return {
				...state,
				valuePost: action.postText
			}

		case SET_USER_PROFILE: 
			return {
				...state,
				profile: action.profile
			}

		default:
			return state;
	}
}

export const addPost = () => ({type: ADD_POST});
export const updatePost = text => ({type: UPDATE_POST, postText: text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});


export default profileReducer