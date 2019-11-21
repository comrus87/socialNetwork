import React from 'react';
import classes from './PostMessage.module.css';


const PostMessage = props => {

  let onBtnAddMessage = () => {
    props.addMessage();
  }

  let onMessageChange = evt => {
    let text = evt.target.value;
    props.updateMessage(text);
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