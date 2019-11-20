import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';


const Profile = props => {
	return (
      <div>
        <ProfileInfo />
    	<MyPosts posts={props.state.posts} 
    			 dispatch={props.dispatch}
    			 valuePost={props.state.valuePost} />
      </div>
     )
}

export default Profile;