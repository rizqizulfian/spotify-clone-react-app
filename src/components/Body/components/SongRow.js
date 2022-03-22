import React from 'react';
import { useDataLayerValue } from '../../../utils/DataLayer';
import "./SongRow.css"

const SongRow = ({ track }) => {
  const [{ current_track }, dispatch] = useDataLayerValue();

  const setCurrentTrack = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_CURRENT_TRACK',
      track
    })
  };

  return (
    <div className="songRow" onClick={setCurrentTrack} data-testid="oiii">
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map(artist => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  )
};

export default SongRow;