import React from 'react';
import "./Sidebar.css";
import SidebarOption from './components/SidebarOption';
import iconSpotifyLogo from '../../assets/img/spotify-logo.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../utils/DataLayer';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log('ini masuk si playlists', playlists)
  return (
    <div className="sidebar">
      <img className="sidebar__logo" height="50px" style={{ padding: '20px', marginRight: 'auto' }} src={iconSpotifyLogo} alt="" />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;