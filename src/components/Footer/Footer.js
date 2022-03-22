import React from 'react';

// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import ShuffleIcon from '@mui/icons-material/Shuffle';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
// import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import AudioPlayer from 'react-h5-audio-player';
// import { Grid, Slider } from '@mui/material';

import "./Footer.css";
import 'react-h5-audio-player/lib/styles.css';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://cdns-images.dzcdn.net/images/cover/cb3c5907fc103288135db863a70d66f7/500x500.jpg" alt="" />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer__center">
        {/* <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" /> */}
        <div id="player">
          <div className="track-slider">
            <AudioPlayer
              src="https://p.scdn.co/mp3-preview/56234438d41c69c8d81ad36f80a5d4366664b243?cid=1fd77f4a31ea4e059596f9fcb3a6af41"
              customAdditionalControls={[]}
              layout="stacked-reverse"
              // autoPlay
              volume={0.5}
              showDownloadProgress={false}
            />
          </div>
        </div>
      </div>

      <div className="footer__right">
        {/* <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid> */}
      </div>
    </div>
  )
};

export default Footer;