import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


const mapStateToPropsForRedirect = state => {
  return {
    isAuth: state.auth.isAuth
  }
};

export const withAuthRedirect = Component => {

	class RedirectComponent extends React.Component {

		render () {
			if (!this.props.isAuth) {
				return <Redirect to={'/Login'}  />
			};

			return <Component {...this.props} />
		}
	}

	let ConnectAuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent);

	return ConnectAuthRedirect;
}

