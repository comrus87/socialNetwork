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
			let newPost = {
				id: 5,
				message: state.valuePost,
				likesCount: 17
			};
			state.posts.push(newPost);
			state.valuePost = '';
			return state;

		case UPDATE_POST: 
			state.valuePost = action.postText;
			return state;

		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = text => ({type: UPDATE_POST, postText: text});

export default profileReducer