import React from 'react';
import classes from './User.module.css';
import ava from './../../../assets/images/ava.png';
import {NavLink} from 'react-router-dom';

const User = ({user, followProgress, follow, unfollow}) => {

    return (
          <div>
            <span>
              <NavLink to={'/profile/'+ user.id}>
                <div>
                  <img src={user.photos.small != null ? user.photos.small : ava} className={classes.userPhoto} alt='Аватар пользователя' />
                </div>
              </NavLink>
              <div>
                {user.followed
                ? <button onClick={() => {unfollow(user.id)}} disabled={followProgress.some(id => id === user.id)}>Unfollow</button>

                : <button onClick={() => {follow(user.id)}} disabled={followProgress.some(id => id === user.id)}>Follow</button>}

              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </span>
            </span>
          </div>
      )    
	
}

export default User;