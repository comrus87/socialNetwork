import React from 'react';
import classes from './Users.module.css';
import ava from './../../assets/images/ava.png';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';
import {delFollowUser, postFollowUser} from './../../api/api';



const Users = props => {

    let countPage = Math.ceil(props.totalUsers/props.pageSize);

    let pages = [];

    for (let i=1; i <= countPage; i++) {
      pages.push(i)
    }

    return (
        <div>

          <div className={classes.pagination}>
            {pages.map(page => {
              return <span className={props.currentPage === page ? classes.currentPage : ''}
                            onClick={(evt) => props.onPageChanged(page)}> {page} </span>
            })

            }
          </div>

          { props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'/profile/'+ u.id}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : ava} className={classes.userPhoto} />
                        </div>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                delFollowUser(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollowUser(u.id)
                                        }
                                })

                            }}>Unfollow</button>
                            : <button onClick={() => {

                                 postFollowUser(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.followUser(u.id)
                                    }
                                })                              

                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
          }
        </div> 
      )    
	
}

export default Users;