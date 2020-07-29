import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({backButton}) {
  const history = useHistory();
  return (
    <div className="Header">
    {backButton ? (
      <IconButton onClick={() => history.replace(backButton)}>
        <ArrowBackIosIcon fontSize="large" className="Header__Icon"/>
      </IconButton>
    ):
    (
      <IconButton>
        <PersonIcon className="Header__Icon" fontSize="large" />
      </IconButton>
    )}

      <Link to="/">
        <img className="Header__Icon Header__TinderLogo" src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png" alt="Tinder Icon" />
      </Link>
      <Link to="chat">
        <IconButton>
          <ForumIcon className="Header__Icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
