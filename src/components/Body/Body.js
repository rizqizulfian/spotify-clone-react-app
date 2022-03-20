import React from 'react';
import Header from './components/Header';

import "./Body.css";

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        {/* <img src="https://i.scdn.co/image/6682aad217c1" alt="" /> */}
        <img src="https://cdns-images.dzcdn.net/images/cover/cb3c5907fc103288135db863a70d66f7/500x500.jpg" alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
};

export default Body;