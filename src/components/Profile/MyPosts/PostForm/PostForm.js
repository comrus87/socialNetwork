import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from './../../../common/FormControls/FormControls';
import {required, maxLength} from './../../../../utils/validators/validators';


const maxLength15 = maxLength(15)

let PostForm = props => {
	return (
 		<form onSubmit={props.handleSubmit}>
 			<div> 
        <Field name='postText' value={props.valuePost} component={Textarea} validate={[required, maxLength15]} />
      </div>
 			<div> 
        <button> Add post </button> 
      </div>
 		</form>
  )
}


export default PostForm = reduxForm({form: 'post'})(PostForm);
