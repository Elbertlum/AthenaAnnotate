import React, { PropTypes } from 'react';

const GroupList = ({ user, leaveGroupDB, setGroup, showModal, setFilter, group }) => {
  const groups = group.groups.map(groupObj => (
    <li key={groupObj.id}>
      <a
        className="nav-header"
        data-target="#groups"
        onClick={() => {
          setGroup(groupObj.id);
          setFilter('Groups');
        }}
      >
        {groupObj.name}
        <button onClick={() => leaveGroupDB(groupObj.id, user.id)}>
          X
        </button>
      </a>
    </li>
  ));
  return (
    <ul className="nav nav-list" id="groups">
      {groups}
      <li>
        <a
          className="nav-header"
          data-target="#groups"
          onClick={() => showModal()}
        >
          Create a new Group
        </a>
      </li>
    </ul>
  );
};

GroupList.propTypes = {
  user: PropTypes.object,
  leaveGroupDB: PropTypes.func.isRequired,
  setGroup: PropTypes.func.isRequired,
  group: PropTypes.object,
  showModal: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default GroupList;
