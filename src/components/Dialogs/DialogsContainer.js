import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateMessageActionCreator} from './../../redux/dialogsReducer';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: () => {
     dispatch(addMessageActionCreator());
    },
    updateMessage: text => {
     dispatch(updateMessageActionCreator(text));
    }
  }
};



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;