import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ava from './../../../assets/images/ava.png';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileData/ProfileDataForm/ProfileDataForm';

const ProfileInfo = props => {

  let [editMode, setEditMode] = useState(false);

  const onBtnEditProfile = () => {
    setEditMode(true)
  }

  const onSubmit = FormData => {
    let promise = props.saveProfile(FormData);
    promise.then(()=> {
      setEditMode(false)
    });

  }

  if (!props.profile) {
    return <Preloader />
  }

  const onUploadPhoto = evt => {
    if (evt.target.files.length) {
      props.savePhoto(evt.target.files[0])
    }
  }

	return (
        <div className={classes.description}>
          <img src={props.profile.photos.large || ava} className={classes.avatar} alt='Автарка пользователя' />
          {props.isOwner && <input type='file' onChange={onUploadPhoto} />}
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
         
          {editMode 
            ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
            : <ProfileData profile={props.profile} isOwner={props.isOwner} onBtnEdit={onBtnEditProfile} /> }
          
    	  </div>
     )
}

export default ProfileInfo;