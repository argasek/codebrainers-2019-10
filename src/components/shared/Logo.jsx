import React from 'react';
import planetEarthImage from 'images/planet-earth.svg';

const Logo = (props) => {
  return (
    <img src={ planetEarthImage } { ...props } />
  );
};

export default Logo;
