import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {getProfileUser} from './../../api/api';

class ProfileContainer extends React.Component {

	componentDidMount () {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2
		};
	    getProfileUser(userId).then(data => {
	      this.props.setUserProfile(data);
	    })
	}

	render () {
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile
  }
};

let withUrlDataProfileContainer = withRouter(ProfileContainer);



export default connect(mapStateToProps, {setUserProfile})(withUrlDataProfileContainer);