import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />
  }

	return (
      <div>
        <div className={classes.description}>
          <img src={props.profile.photos.large} />
      		<div> {props.profile.aboutMe} </div>
    	  </div>
      </div>
     )
}

export default ProfileInfo;