import React from 'react';
import classes from './PostMessage.module.css';
import {Field, reduxForm} from 'redux-form';
import {required, maxLength} from './../../../utils/validators/validators';
import {Textarea} from './../../common/FormControls/FormControls';

const maxLength100 = maxLength(100)

let PostMessage = props => {
  
	return (
          <form onSubmit={props.handleSubmit}>
          <div>
            <Field className={classes.area}
                   name='message'
                   component={Textarea}
                   validate={[required, maxLength100]}
            />
          </div>
          <div>
            <button className={classes.btn}> Добавить </button>
          </div>
          </form>
	)
}

export default PostMessage = reduxForm({form: 'dialog'})(PostMessage);