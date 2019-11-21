import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from './../../../redux/dialogsReducer';
import PostMessage from './PostMessage';



const PostMessageContainer = props => {


  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let updateMessage = text => {
    props.store.dispatch(updateMessageActionCreator(text));
  }

	return (
    <PostMessage addMessage={addMessage} 
                 updateMessage={updateMessage}
                 valueMessage={props.valueMessage} />
	)
}

export default PostMessageContainer;