import React from 'react';
import "./Sidebar.css";
import SidebarOption from './components/SidebarOption';
import iconSpotifyLogo from '../../assets/img/spotify-logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" height="50px" style={{padding: '20px', marginRight: 'auto'}} src={iconSpotifyLogo} alt="" />
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your Library" />
    </div>
  )
};

export default Sidebar;