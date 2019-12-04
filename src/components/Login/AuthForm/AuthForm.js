import React from 'react';
import classes from './AuthForm.module.css';
import {Field, reduxForm} from 'redux-form'

let AuthForm = props => {
	return (
        <form onSubmit={props.handleSubmit}>
        	<div>
        	   <Field placeholder={'Nickname'} name={'nickname'} component={'input'} />
        	</div>
        	<div>
        	   <Field placeholder={'Password'} name={'password'} component={'input'} />
        	</div>
        	<div>
        	   <Field type={'checkbox'} name={'rememberMe'} component={'input'} />
        	</div>
        	<div>
        	   <button> Login in </button>
        	</div>
        </form>
	)
};



export default AuthForm = reduxForm({form: 'login'})(AuthForm);
