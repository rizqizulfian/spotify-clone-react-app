import React from 'react';
import "./Sidebar.css";
import iconSpotifyLogo from '../../assets/img/spotify-logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" height="50px" style={{padding: '10px', marginRight: 'auto'}} src={iconSpotifyLogo} alt="" />
    </div>
  )
};

export default Sidebar;