import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Profile from './Profile';
import {getProfile} from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';

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
    profile: state.profilePage.profile,
  }
};

export default compose(
	connect(mapStateToProps, {getProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
