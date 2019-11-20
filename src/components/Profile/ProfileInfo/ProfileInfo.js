import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = props => {
	return (
      <div>
      	<div>
        	<img src='https://avatars.mds.yandex.net/get-pdb/992060/9b0e8941-5e18-4d31-b689-cc716df1643b/s1200?webp=false' />
        </div>
        <div className={classes.description}>
      		ava + description
    	  </div>
      </div>
     )
}

export default ProfileInfo;