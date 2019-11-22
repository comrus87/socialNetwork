const ADD_MESSAGE= 'ADD-MESSAGE';
const UPDATE_MESSAGE= 'UPDATE-MESSAGE';

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
	],

	valueMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_MESSAGE: 
		let valueMessage = state.valueMessage;

		return {
			...state,
			valueMessage: '',
			messages: [...state.messages, {id: 4, text: valueMessage}]
		}

		case UPDATE_MESSAGE: 

		return {
			...state,
			valueMessage: action.messageText
		}

		default:
			return state;
		}
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageActionCreator = text => ({type: UPDATE_MESSAGE, messageText: text});

export default dialogsReducer
