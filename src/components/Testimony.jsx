import React from 'react';
import '../stylesheets/Testimony.css';

function Testimony(props) {
  return (
    <div className='testimony__container'>
      <img 
        className='testimony__image' 
        src={require(`../images/testimony-${props.image}.png`)}
        alt='User profile'
      />
      <div className='testimony__text-container'>
        <p className="testimony__name">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="testimony__position">
          {props.position} at <strong>{props.company}</strong>
        </p>
        <p className="testimony__text">
          "{props.testimony}"
        </p>
      </div>
    </div>
  );
}

export default Testimony;