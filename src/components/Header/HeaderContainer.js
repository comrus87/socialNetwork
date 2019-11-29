import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUsersData} from './../../redux/authReducer';
import {getAuthData} from './../../api/api';

class HeaderContainer extends React.Component {

	componentDidMount() {
  	getAuthData().then(data => {
  		if (data.resultCode === 0) {
  			let {id, email, login} = data.data;
    		this.props.setAuthUsersData(id, email, login);
  		}
   	})
  }

  render () {
  	return (
  			<Header {...this.props} />
  		)
  }
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});



export default connect(mapStateToProps, {setAuthUsersData})(HeaderContainer);