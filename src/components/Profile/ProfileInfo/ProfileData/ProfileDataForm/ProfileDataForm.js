import React from 'react';
import classes from './ProfileDataForm.module.css';
import {Input, Textarea} from './../../../../common/FormControls/FormControls';
import {Field, reduxForm} from 'redux-form';

let ProfileDataForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div> 
          <b>Name:</b> 
          <Field placeholder='Full name' name='fullName' component={Input} />
        </div>
        <div> 
          <b>About:</b> 
          <Field placeholder='About me' name='aboutMe' component={Input} />
        </div>
        <div> 
          <b>looking for a job:</b> 
          <Field placeholder='About me' name='lookingForAJob' component={Input} type='checkbox' />
        </div>
        <div>
          <b>Work description:</b>
          <Field placeholder='Description' name='lookingForAJobDescription' component={Textarea} />
        </div>
        <div><b>Contacts: </b></div>
          {Object.keys(props.profile.contacts).map(key => {
            return <div key={key}>
                     <b>{key}:</b> 
                     <Field placeholder='' name={'contacts.' + key} component={Input} />
                   </div>
          })}
        {props.error && <div className={classes.error}> {props.error} </div>}
        <button> Save profile </button>
    </form>
    )
}

export default ProfileDataForm = reduxForm({form: 'editProfile'})(ProfileDataForm);