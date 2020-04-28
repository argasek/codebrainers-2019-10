import React from 'react';
import planetEarthImage from 'images/planet-earth.svg';

const Logo = (props) => {
  return (
    <img src={ planetEarthImage } { ...props } alt='Plantastic logotype: earth surrounded by a plant branch' />
  );
};

export default Logo;
