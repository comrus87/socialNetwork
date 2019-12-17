import React, {lazy} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import {Route, withRouter} from 'react-router-dom';
import {initializeApp} from './redux/appReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));




class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

	render() {

		if (!this.props.initialized) {
			return <Preloader />
		}

	  	return (
			    <div className="app-wrapper">
			      <HeaderContainer />
			      <Navbar />
			      <div className="app-wrapper-content">
			      	<Route path="/dialogs" render={withSuspense(DialogsContainer)}
			      	/>
			      	<Route path="/profile/:userId?" render={() => <ProfileContainer />}
			      	/>
			      	<Route path="/news" render={() => <News />} />
			      	<Route path="/music" render={() => <Music />} />
			      	<Route path="/settings" render={() => <Settings />} />
			      	<Route path="/users" render={withSuspense(UsersContainer)} />
			      	<Route path="/login" render={() => <Login />} />
			      </div>
			    </div>
		);
	}
}

const mapStateToProps = state => {
  return {
    initialized: state.app.initialized
  }
};

export default compose(
	connect(mapStateToProps, {initializeApp}),
	withRouter
	)(App);
