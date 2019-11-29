import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = props => {

  let postsElements = props.posts.map(p => (<Post key={p.id} message={p.message} likesCount={p.likesCount} />));


  let onBtnAddPost = () => {
    props.addPost();
  }

  let onPostChange = evt => {
    let text = evt.target.value;
    props.updatePost(text);
  }


	return (
    <div className={classes.postsBlock}> 
    	<h3> My posts </h3>
 		<div> New post 
 			<div> <textarea onChange={onPostChange} value={props.valuePost} /> </div>
 			<div> <button onClick={onBtnAddPost}> Add post </button> </div>
 		</div>
  		<div className={classes.posts}>
        {postsElements}
  		</div>
    </div>
  )
}

export default MyPosts;