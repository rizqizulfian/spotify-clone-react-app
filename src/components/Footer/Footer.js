import React from 'react';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>Album and song details</p>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon className="" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <p>Volume controls</p>
      </div>
    </div>
  )
};

export default Footer;