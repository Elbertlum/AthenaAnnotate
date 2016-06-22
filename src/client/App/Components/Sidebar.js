import React, { PropTypes } from 'react';
import FacebookLogout from '../../../libs/athena/src/components/FacebookLogout';

const Sidebar = ({ logout }) => (
  <div className="col s2 offset-s2">
    <ul>
      <li>
        <a>Following</a>
      </li>
      <li>
        <a>Groups</a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <a>Help</a>
      </li>
    </ul>
    <FacebookLogout logout={logout} />
  </div>
);

Sidebar.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Sidebar;