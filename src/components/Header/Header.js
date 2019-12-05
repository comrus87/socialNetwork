import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = props => {
	return (
	  <header className={classes.header}>
      	<img src='https://avatars.mds.yandex.net/get-pdb/1639023/8c4d0cc9-b94d-4507-86a1-510608c076a3/s1200' />
      	<div className={classes.login}> 
      		{props.isAuth 
      			? <div> 
      				<span> {props.login} </span>
      				<button onClick={props.logout}> Выйти </button>
      			 </div>
      			: <NavLink to='/profile'> Войти </NavLink>}
			
		</div>
      </header>
	)
}

export default Header;