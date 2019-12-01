import React from 'react';
import Users from './Users';
import {follow, unfollow, setCurrentPage, getUsers} from './../../redux/usersReducer';
import {connect} from 'react-redux';
import Preloader from './../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  }


  render() {
    return <div>
              {this.props.isFetching ? <Preloader /> : null}
              <Users totalUsers = {this.props.totalUsers}
                  pageSize = {this.props.pageSize} 
                  currentPage = {this.props.currentPage}
                  users = {this.props.users}
                  follow = {this.props.follow}
                  unfollow = {this.props.unfollow}
                  onPageChanged = {this.onPageChanged}
                  followProgress = {this.props.followProgress}
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
    isFetching: state.usersPage.isFetching,
    followProgress: state.usersPage.followProgress
  }
};


const mapDispatchToProps = {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

