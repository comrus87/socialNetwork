import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import PostMessage from './PostMessage/PostMessage';


const Dialogs = props => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map(d => (<DialogItem name={d.name} id={d.id} />));

  let messageElements = state.messages.map(m => (<Message text={m.text} />));

	return (
	  <div className={classes.dialog}>
      	<div className={classes.dialogList}>
          {dialogElements}
      	</div>
      	<div className={classes.messagesList}>
          {messageElements}
          <PostMessage addMessage={props.addMessage}
                       updateMessage={props.updateMessage}
                       valueMessage={state.valueMessage} />
      	</div>
      </div>
	)
}

export default Dialogs;