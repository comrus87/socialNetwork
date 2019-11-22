const ADD_POST= 'ADD-POST';
const UPDATE_POST= 'UPDATE-POST';

let initialState = {
	posts: [
		{id: 1, message: "Hello, it's John", likesCount: 20},
		{id: 2, message: "Hello, it's Mike", likesCount: 15}
	],

	valuePost: ''
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

		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = text => ({type: UPDATE_POST, postText: text});

export default profileReducer