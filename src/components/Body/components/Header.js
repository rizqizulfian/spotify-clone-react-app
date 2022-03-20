import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Albums"
          type="text"
        />
      </div>

      <div className="header__right">
        <Avatar src="" alt="RQ" />
        <h4>Rafeh Qazi</h4>
      </div>
    </div>
  );
};

export default Header;