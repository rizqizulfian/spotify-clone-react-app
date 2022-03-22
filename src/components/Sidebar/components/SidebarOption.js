import React from 'react';
import { useDataLayerValue } from '../../../utils/DataLayer';
import "./SidebarOption.css";
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

const SidebarOption = ({ title, Icon, playlist = {} }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  const setSelectedPlaylists = (e) => {
    e.preventDefault();
    spotify.getPlaylist(playlist.id).then((response) => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      });
    });
  };

  return (
    <div className="sidebarOption" onClick={setSelectedPlaylists}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title} </h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;