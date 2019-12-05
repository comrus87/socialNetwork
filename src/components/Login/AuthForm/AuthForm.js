import React from 'react';
import classes from './AuthForm.module.css';
import {Field, reduxForm} from 'redux-form';
import {Input} from './../../common/FormControls/FormControls';
import {required, maxLength} from './../../../utils/validators/validators';


const maxLength40 = maxLength(40)

let AuthForm = props => {
	return (
        <form onSubmit={props.handleSubmit}>
        	<div>
        	   <Field placeholder='Email' 
                          name='email' 
                          component={Input} 
                          validate={[required, maxLength40]} />
        	</div>
        	<div>
        	   <Field placeholder='Password' 
                          name='password'
                          type='password'
                          component={Input} 
                          validate={[required, maxLength40]} />
        	</div>
        	<div>
        	   <Field type='checkbox' name='rememberMe' component='input' />
        	</div>
          
            {props.error && <div className={classes.error}> {props.error} </div>}
          
        	<div>
        	   <button> Login in </button>
        	</div>
        </form>
	)
};



export default AuthForm = reduxForm({form: 'login'})(AuthForm);
