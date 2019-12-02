import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  activatedStatus () {
    this.setState({
      editMode: true
    });
  }

  deActivatedStatus () {
    this.setState({
      editMode: false
    });
  }

	render () {
    return <div>
              <div>
                {!this.state.editMode &&
                <span onDoubleClick={this.activatedStatus.bind(this)}>{this.props.status} </span>
                }
              </div>
              <div>
                {this.state.editMode &&
                <input autoFocus={true} onBlur={this.deActivatedStatus.bind(this)} value={this.props.status} />
                }
              </div>
           </div>
  }
}

export default ProfileStatus;