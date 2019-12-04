import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activatedStatus = () => {
    this.setState({
      editMode: true
    });
  }

  deActivatedStatus = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (evt) => {
    this.setState({
      status: evt.currentTarget.value
    });
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

	render () {
    return <div>
              <div>
                {!this.state.editMode &&
                <span onDoubleClick={this.activatedStatus}>{this.props.status} </span>
                }
              </div>
              <div>
                {this.state.editMode &&
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivatedStatus} value={this.state.status} />
                }
              </div>
           </div>
  }
}

export default ProfileStatus;