import React from 'react';
import classes from './PostMessage.module.css';
import {Field, reduxForm} from 'redux-form'


let PostMessage = props => {
  
	return (
          <form onSubmit={props.handleSubmit}>
          <div>
            <Field className={classes.area} 
                   value={props.valueMessage}
                   name={'message'}
                   component={'textarea'}
            />
          </div>
          <div>
            <button className={classes.btn}> Добавить </button>
          </div>
          </form>
	)
}

export default PostMessage = reduxForm({form: 'dialog'})(PostMessage);