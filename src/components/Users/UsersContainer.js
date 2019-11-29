import React from 'react';
import Users from './Users';
import {followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsers, toggleFetching} from './../../redux/usersReducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Preloader from './../common/Preloader/Preloader';
import {getUsers} from './../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize)
    .then(data => {
      this.props.toggleFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsers(data.totalCount);
    })
  }

  onPageChanged = pageNumber => {
    this.props.toggleFetching(true);
    this.props.setCurrentPage(pageNumber);
    getUsers(pageNumber, this.props.pageSize)
    .then(data => {
        this.props.toggleFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsers(data.totalCount);
      })
  }


  render() {
    return <div>
              {this.props.isFetching ? <Preloader /> : null}
              <Users totalUsers = {this.props.totalUsers}
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
            </div>  
  }

}


const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    totalUsers: state.usersPage.totalUsers,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
};


const mapDispatchToProps = {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsers,
    toggleFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

