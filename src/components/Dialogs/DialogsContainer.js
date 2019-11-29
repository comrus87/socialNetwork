import React from 'react';
import Dialogs from './Dialogs';
import {addMessage, updateMessage} from './../../redux/dialogsReducer';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  }
};

const mapDispatchToProps = {
    addMessage,
    updateMessage
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;