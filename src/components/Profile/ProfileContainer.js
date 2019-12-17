import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Profile from './Profile';
import {getProfile, getStatus, updateStatus, savePhoto, saveProfile} from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

	refreshProfile () {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.userId
		};
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidMount () {
		this.refreshProfile();
	}

	componentDidUpdate (prevProps, prevState) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}



	render () {
		return <Profile {...this.props} profile={this.props.profile} 
										status={this.props.status}
										updateStatus={this.props.updateStatus}
										isOwner={!this.props.match.params.userId}
										savePhoto={this.props.savePhoto}
										saveProfile={this.props.saveProfile}
				/>
	}
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
  }
};

export default compose(
	connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
