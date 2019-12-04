const ADD_MESSAGE= 'ADD-MESSAGE';

let initialState = {
	messages: [
		{id: 1, text: "Hello"},
		{id: 2, text: "Are you drink?"},
		{id: 3, text: "Yooooo!!"}
	],

	dialogs: [
	  {id: 1, name: "Dmitry"},
	  {id: 2, name: "Andrew"},
	  {id: 3, name: "Vadim"},
	  {id: 4, name: "Sveta"},
	  {id: 5, name: "Natali"}
	]
}

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_MESSAGE: 
		let valueMessage = action.message;

		return {
			...state,
			messages: [...state.messages, {id: 4, text: valueMessage}]
		}

		default:
			return state;
		}
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message});

export default dialogsReducer
