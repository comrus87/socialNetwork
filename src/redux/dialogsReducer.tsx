const ADD_MESSAGE= 'dialog/ADD-MESSAGE';

let initialState = {
	messages: [
		{id: 1, text: "Hello"},
		{id: 2, text: "Are you drink?"},
		{id: 3, text: "Yooooo!!"}
	] as Array<MessageType>,

	dialogs: [
	  {id: 1, name: "Dmitry"},
	  {id: 2, name: "Andrew"},
	  {id: 3, name: "Vadim"},
	  {id: 4, name: "Sveta"},
	  {id: 5, name: "Natali"}
	] as Array<DialogsType>
}

type MessageType = {
	id: number,
	text: string
};

type DialogsType = {
	id: number,
	name: string
};

type InitialStateType = typeof initialState;


const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type addMessageActionType = {
	type: typeof ADD_MESSAGE,
	message: string
}

export const addMessage = (message: string): addMessageActionType => ({type: ADD_MESSAGE, message});

export default dialogsReducer
