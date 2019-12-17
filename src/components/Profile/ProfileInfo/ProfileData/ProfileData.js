import React from 'react';
import Contact from './Contact';


const ProfileData = props => {
  return (
    <div>
        {props.isOwner && <button onClick={props.onBtnEdit} > Edit profile </button>}
        <div> <b>Name:</b> {props.profile.fullName} </div>
        <div> <b>About:</b> {props.profile.aboutMe} </div>
        <div> <b>looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'} </div>
        {props.profile.lookingForAJob && 
          <div><b>Work description:</b> {props.profile.lookingForAJobDescription} </div>}
        <div><b>Contacts: </b></div>
        <div>
          {Object.keys(props.profile.contacts).map(key => {
            return <Contact title={key} value={props.profile.contacts[key]} key={key} />
          })}
        </div>
    </div>
    )
}

export default ProfileData;