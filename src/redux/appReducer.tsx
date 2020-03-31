import {getAuthUserData} from './authReducer';

const SET_INITIALIZED = 'app/SET_INITIALIZED';

type InitialStateType = {
	initialized: boolean
}

let initialState: InitialStateType = {
	initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true
			}

		default:
			return state;
	}
}

type InitializedSuccessActionType = {
	type: typeof SET_INITIALIZED
}

export const initializedSuccess = ():InitializedSuccessActionType => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserData());

	promise.then(() => {
		dispatch(initializedSuccess());
	});
};



export default appReducer