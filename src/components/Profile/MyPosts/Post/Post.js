import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (
        <div className={classes.item}>
	        <img src='https://yt3.ggpht.com/a/AGF-l7_YuL4ShkhAjI1xh5LGmHvQY6GoM-IGoWLD2w=s900-c-k-c0xffffffff-no-rj-mo' />
	        {props.message}
	        <span> Like {props.likesCount} </span>
        </div>
  )
}

export default Post;