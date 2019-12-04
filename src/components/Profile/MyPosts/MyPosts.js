import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';


const MyPosts = props => {

  let postsElements = props.posts.map(p => (<Post key={p.id} message={p.message} likesCount={p.likesCount} />));

  let addNewPost = (values) => {
    props.addPost(values.postText);
  }

	return (
    <div className={classes.postsBlock}> 
    	<h3> My posts </h3>
 		<div> New post
      <PostForm onSubmit={addNewPost} />
 	  </div>
  		<div className={classes.posts}>
        {postsElements}
  		</div>
    </div>
  )
}

export default MyPosts;