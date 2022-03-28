import React from 'react';
import {Link} from 'react-router-dom';

import './DefaultSection.scss';

const getImageContainer = image => (
  <div className="image-container">
    <div className="background">
      <img src={image} alt="error" />
    </div>
  </div>
);

const getDescriptionContainer = (title, subtitle, buttonTo) => (
  <div className="description-container">
    <div className="description-container-side">
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle} </p>
      {buttonTo ? (
        <Link className="button" to={buttonTo}>
          <p>więcej</p>
        </Link>
      ) : null}
    </div>
  </div>
);

const DefaultSection = ({title, subtitle, image, buttonTo, isRight}) => {
  return (
    <div className={`default-section ${isRight ? 'right' : 'left'}`}>
      {isRight ? '' : getImageContainer(image)}
      {getDescriptionContainer(title, subtitle, buttonTo)}
      {isRight ? getImageContainer(image) : ''}
    </div>
  );
};

export default DefaultSection;
