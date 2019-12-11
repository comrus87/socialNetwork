import React, {useState, useEffect} from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = props => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activatedStatus = () => {
    setEditMode(true);
  };

  const deActivatedStatus = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (evt) => {
    setStatus(evt.currentTarget.value);
  }

    return <div>
              <div>
                {!editMode &&
                <span onDoubleClick={activatedStatus}>{props.status || 'Статус' } </span>
                }
              </div>
              <div>
                {editMode &&
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivatedStatus} value={status} />
                }
              </div>
           </div>
}

export default ProfileStatusWithHooks;