import React from 'react';
import Users from './Users';
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageAC, setTotalUsersAC} from './../../redux/usersReducer';
import {connect} from 'react-redux';
import * as axios from 'axios';

class UsersContainer extends React.Component {

  componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      })
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      })
  }


  render() {
    return <Users totalUsers = {this.props.totalUsers}
                  pageSize = {this.props.pageSize} 
                  currentPage = {this.props.currentPage}
                  users = {this.props.users}
                  followUser = {this.props.followUser}
                  unfollowUser = {this.props.unfollowUser}
                  setUsers ={this.props.setUsers}
                  setCurrentPage = {this.props.setCurrentPage}
                  setTotalUsers = {this.props.setTotalUsers}
                  onPageChanged = {this.onPageChanged}
                  />   
  }

}


const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    totalUsers: state.usersPage.totalUsers,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsers: users => {
      dispatch(setTotalUsersAC(users))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);



