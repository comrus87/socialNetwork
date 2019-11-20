import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(<App state={state} 
						 dispatch={store.dispatch.bind(store)}
					 />, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state)
});

serviceWorker.unregister();
