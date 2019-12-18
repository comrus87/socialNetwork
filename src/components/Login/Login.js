import React from 'react';
import classes from './Login.module.css';
import AuthForm from './AuthForm/AuthForm';
import {login} from './../../redux/authReducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Login = props => {
	let SignIn = formData => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	};

	if (props.isAuth) {
		return <Redirect to={'/profile'}  />
	};


	return (
	  <div className={classes.wpaper}>
        <h1> Зарегистрируйтесь </h1>
        <AuthForm onSubmit={SignIn} captchaUrl={props.captchaUrl} />
      </div>
	)
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
};

export default connect(mapStateToProps, {login})(Login);