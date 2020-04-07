import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Profile from './Profile';
import {getProfile, getStatus, updateStatus, savePhoto, saveProfile} from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {profileType} from './../../types/types';
import {AppStateType} from './../../redux/redux-store';


type MapStatePropsType = {
	profile: profileType | null,
	status: string,
	isAuth: boolean,
	userId: number | null
}

type MapDispatchPropsType = {
	getProfile: (userId: number) => void,
	getStatus: (userId: number) => void,
	updateStatus: (status: string) => void, 
	savePhoto: (file: any) => void,
	saveProfile: (profile: profileType) => void
}


type PropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {

	refreshProfile () {
		// @ts-ignore
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

	componentDidUpdate (prevProps: PropsType, prevState: AppStateType) {
		// @ts-ignore
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}



	render () {
		return <Profile {...this.props} profile={this.props.profile} 
										status={this.props.status}
										updateStatus={this.props.updateStatus}
										// @ts-ignore
										isOwner={!this.props.match.params.userId}
										savePhoto={this.props.savePhoto}
										saveProfile={this.props.saveProfile}
				/>
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
  }
};

export default compose(
	connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
