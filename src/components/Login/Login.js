import React from 'react';
import classes from './Login.module.css';
import AuthForm from './AuthForm/AuthForm';


const Login = props => {
	let onSubmit = formData => {
		console.log(formData)
	};

	return (
	  <div className={classes.wpaper}>
        <h1> Зарегистрируйтесь </h1>
        <AuthForm onSubmit={onSubmit} />
      </div>
	)
}

export default Login