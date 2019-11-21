import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';

import {BrowserRouter, Route} from 'react-router-dom';


const App = props => {

  return (
  	<BrowserRouter>
	    <div className="app-wrapper">
	      <Header />
	      <Navbar />
	      <div className="app-wrapper-content">
	      	<Route path="/dialogs" render={() => <Dialogs store={props.store} />}
	      	/>
	      	<Route path="/profile" render={() => <Profile store={props.store} />}
	      	/>
	      	<Route path="/news" render={() => <News />} />
	      	<Route path="/music" render={() => <Music />} />
	      	<Route path="/settings" render={() => <Settings />} />
	      </div>
	       
	    </div>
  	</BrowserRouter>
  );
}

export default App;

// state={props.state.dialogsPage} dispatch={props.dispatch}