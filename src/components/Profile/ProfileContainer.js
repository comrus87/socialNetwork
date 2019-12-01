import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getProfile} from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

	componentDidMount () {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2
		};
		this.props.getProfile(userId);
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



export default connect(mapStateToProps, {getProfile})(withUrlDataProfileContainer);