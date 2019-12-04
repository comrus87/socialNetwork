import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Profile from './Profile';
import {getProfile, getStatus, updateStatus} from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

	componentDidMount () {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 5316
		};
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}

	render () {
		return <Profile {...this.props} profile={this.props.profile} 
										status={this.props.status}
										updateStatus={this.props.updateStatus}
				/>
	}
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
};

export default compose(
	connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
