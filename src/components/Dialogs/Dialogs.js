import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import PostMessageContainer from './PostMessage/PostMessageContainer';


const Dialogs = props => {
  let state = props.store.getState();

  let valueMessage = state.dialogsPage.valueMessage;

  let dialogElements = state.dialogsPage.dialogs.map(d => (<DialogItem name={d.name} id={d.id} />));

  let messageElements = state.dialogsPage.messages.map(m => (<Message text={m.text} />));

	return (
	  <div className={classes.dialog}>
      	<div className={classes.dialogList}>
          {dialogElements}
      	</div>
      	<div className={classes.messagesList}>
          {messageElements}
          <PostMessageContainer store={props.store} valueMessage={valueMessage} />
      	</div>
      </div>
	)
}

export default Dialogs;