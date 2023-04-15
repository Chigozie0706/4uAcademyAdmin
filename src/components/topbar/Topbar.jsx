import React from 'react';
import './topbar.css';
import logo from './logo.jpg';
import { 
  // NotificationsNone, 
  // Language, 
  Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            {' '}
            <img src={logo} width="100px" alt="logo" />
          </span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">0</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
