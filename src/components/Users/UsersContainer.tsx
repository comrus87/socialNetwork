import React from 'react';
import Users from './Users';
import {follow, unfollow, setCurrentPage, getUsers} from './../../redux/usersReducer';
import {connect} from 'react-redux';
import Preloader from './../common/Preloader/Preloader';
import {compose} from 'redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {UsersType} from './../../types/types';
import {AppStateType} from './../../redux/redux-store';

type MapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void,
  setCurrentPage: (pageNumber: number) => void,
  follow: (userId: number) => void,
  unfollow: (userId: number) => void
}

type MapStatePropsType = {
  users: Array<UsersType>,
  totalUsers: number,
  pageSize: number,
  portialSize: number
  currentPage: number,
  isFetching: boolean,
  followProgress: Array<number>
}

type PropsType = MapStatePropsType & MapDispatchPropsType;


class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
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
                  portialSize = {this.props.portialSize}
              />
            </div>  
  }

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    totalUsers: state.usersPage.totalUsers,
    pageSize: state.usersPage.pageSize,
    portialSize: state.usersPage.portialSize,
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

export default compose(
                connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps, mapDispatchToProps),
                withAuthRedirect
                )(UsersContainer);


