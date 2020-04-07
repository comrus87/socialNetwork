import {getAuthUserData} from './authReducer';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';

const SET_INITIALIZED = 'app/SET_INITIALIZED';

type InitialStateType = {
	initialized: boolean
}

let initialState: InitialStateType = {
	initialized: false
}

const appReducer = (state = initialState, action: InitializedSuccessActionType): InitialStateType => {
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

// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, InitializedSuccessActionType>

export const initializedSuccess = ():InitializedSuccessActionType => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserData());

	promise.then(() => {
		dispatch(initializedSuccess());
	});
};



export default appReducer