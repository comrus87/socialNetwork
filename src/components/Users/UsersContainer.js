import React from 'react';
import Users from './Users';
import {followActionCreator, unfollowActionCreator, setUsersActionCreator} from './../../redux/usersReducer';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    followUser: userId => {
     dispatch(followActionCreator(userId));
    },
    unfollowUser: userId => {
     dispatch(unfollowActionCreator(userId));
    },
    setUsers: users => {
      dispatch(setUsersActionCreator(users))
    }
  }
};



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;