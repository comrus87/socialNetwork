import React from 'react';
import Dialogs from './Dialogs';
import {addMessage, updateMessage} from './../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {compose} from 'redux';

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
  }
};

const mapDispatchToProps = {
    addMessage,
    updateMessage
};

export default compose(
				connect(mapStateToProps, mapDispatchToProps),
				withAuthRedirect
				)(Dialogs);