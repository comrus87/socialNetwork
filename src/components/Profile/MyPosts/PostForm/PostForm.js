import React from 'react';
import {Field, reduxForm} from 'redux-form'


let PostForm = props => {
	return (
 		<form onSubmit={props.handleSubmit}>
 			<div> 
        <Field name={'postText'} value={props.valuePost} component={'textarea'} />
      </div>
 			<div> 
        <button> Add post </button> 
      </div>
 		</form>
  )
}


export default PostForm = reduxForm({form: 'post'})(PostForm);
