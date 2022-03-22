import React from 'react';

function Testimony() {
  return (
    <div className='testimony__container'>
      <img 
      className='testimony__image' 
      src={require('../images/Emma-5a662db9bcf55809a1fefb2ea17634bc.png')}
      alt='Emma profile'/>
      <div className='testimony__text-container'>
        <p className="testimony__name">Emma Bostian in Sweden</p>
        <p className="testimony__position">Software Engineer at Spotify</p>
        <p className="testimony__text">"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
      </div>
    </div>
  );
}

export default Testimony;