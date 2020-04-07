import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {profileType} from './../../types/types';

type PropsType = {
  profile: profileType | null,
  status: string, 
  updateStatus: (status: string) => void, 
  isOwner: boolean,
  savePhoto: (file: any) => void,
  saveProfile: (profile: profileType) => void
}


const Profile: React.FC<PropsType> = props => {
  console.log(props)
	return (
      <div>
        <ProfileInfo profile={props.profile}
        			 status={props.status} 
        			 updateStatus={props.updateStatus} 
        			 isOwner={props.isOwner}
        			 savePhoto={props.savePhoto}
               saveProfile={props.saveProfile} />
    	<MyPostsContainer />
      </div>
     )
}

export default Profile;