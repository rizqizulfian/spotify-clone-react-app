import React from 'react';
import Header from './components/Header';

import "./Body.css";

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <h1>I am the body</h1>
      <Header spotify={spotify} />
    </div>
  )
};

export default Body;