import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />
  }

	return (
        <div className={classes.description}>
          <img src={props.profile.photos.large} />
      	  <div> {props.profile.aboutMe} </div>
          <ProfileStatus status={'Hello, i am drunkkkk'} />
    	  </div>
     )
}

export default ProfileInfo;