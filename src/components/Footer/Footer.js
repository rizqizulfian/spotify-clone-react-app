import React from 'react';

import AudioPlayer from 'react-h5-audio-player';

import "./Footer.css";
import 'react-h5-audio-player/lib/styles.css';
import { useDataLayerValue } from '../../utils/DataLayer';


const Footer = () => {
  const [{ user, current_track }, dispatch] = useDataLayerValue();
  console.log('ini masuk di footer', current_track)
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src={current_track ? current_track?.album.images[0].url : user?.images[0]?.url} alt="" />
        <div className="footer__songInfo">
          <h4>{current_track?.name}</h4>
          <p>{current_track ? current_track?.artists.map(artist => artist.name).join(", ") : 'No Music Selected'}</p>
        </div>
      </div>

      <div className="footer__center">
        <div id="player">
          <div className="track-slider">
            <AudioPlayer
              src={current_track?.preview_url}
              customAdditionalControls={[]}
              layout="stacked-reverse"
              autoPlay
              volume={0.5}
              showDownloadProgress={false}
            />
          </div>
        </div>
      </div>

      <div className="footer__right">
      </div>
    </div>
  )
};

export default Footer;