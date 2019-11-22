import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updatePostActionCreator} from './../../../redux/profileReducer';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    valuePost: state.profilePage.valuePost
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updatePost: text => {
      dispatch(updatePostActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;