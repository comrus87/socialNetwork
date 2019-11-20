import React from 'react';
import classes from './PostMessage.module.css';
import {addMessageActionCreator, updateMessageActionCreator} from './../../../redux/dialogsReducer';



const PostMessage = props => {

  let onBtnAddMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = evt => {
    let text = evt.target.value;
    props.dispatch(updateMessageActionCreator(text));
  }

	return (
          <div>
            <textarea onChange={onMessageChange} 
                      className={classes.area} 
                      value={props.valueMessage}> 
            </textarea>
            <button onClick={onBtnAddMessage} className={classes.btn}> Добавить </button>
          </div>
	)
}

export default PostMessage;