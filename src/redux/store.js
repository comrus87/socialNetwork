import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let _callSubscriber;

let store = {

	_state: {
		profilePage: {
			posts: [
				{id: 1, message: "Hello, it's John", likesCount: 20},
				{id: 2, message: "Hello, it's Mike", likesCount: 15}
			],
			valuePost: ''
		},

		dialogsPage: {
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
	},

	getState () {
		return this._state;
	},

	subscribe (observer) {
		_callSubscriber = observer;
	},

	dispatch (action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		_callSubscriber(this._state);
	}

};

export default store
