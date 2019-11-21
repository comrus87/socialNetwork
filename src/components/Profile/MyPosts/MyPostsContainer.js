import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updatePostActionCreator} from './../../../redux/profileReducer';


const MyPostsContainer = props => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let updatePost = text => {
    props.store.dispatch(updatePostActionCreator(text));
  }

	return (
    <MyPosts addPost={addPost} 
             updatePost={updatePost}
             posts={state.profilePage.posts} 
             valuePost={state.profilePage.valuePost} />
  )
}

export default MyPostsContainer;