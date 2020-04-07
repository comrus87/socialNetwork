import React from 'react';
import classes from './Users.module.css';
import Paginator from './../common/Paginator/Paginator';
import User from './User/User';
import {UsersType} from './../../types/types';

type PropsType = {
  totalUsers: number, 
  pageSize: number, 
  currentPage:  number, 
  portialSize: number, 
  onPageChanged: (pageNumber: number) => void,
  users: Array<UsersType>,
  followProgress: Array<number>,
  follow: (userId: number) => void,
  unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = (props) => {

    return (
        <div>

          <Paginator totalUsers={props.totalUsers}  
                     pageSize={props.pageSize}  
                     currentPage={props.currentPage}
                     onPageChanged={props.onPageChanged}
                     portialSize={props.portialSize}
                     />

          { props.users.map(u => <User  user={u}
                                        followProgress={props.followProgress}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        key={u.id} 
                                 />)
          }
        </div> 
      )    
	
}

export default Users;