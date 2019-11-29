import React from 'react';
import MyPosts from './MyPosts';
import {addPost, updatePost} from './../../../redux/profileReducer';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    valuePost: state.profilePage.valuePost
  }
};

const mapDispatchToProps = {
    addPost,
    updatePost
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;