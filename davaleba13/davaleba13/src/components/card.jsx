import React from 'react';

function Card({ name, description, photo, msaxiobebi = [],action }) {
  return (
    <div className='cards'>
      <h1 className='header'>{name}</h1>
      <img src={photo} alt={name} className='photo' />
      <p className='description'>{description}</p>
      <ul>
        {msaxiobebi.map((item,key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
      <button className='action-button' onClick={() => action(name,msaxiobebi.map((item) => item))}>click</button>
    </div>
  );
}

export default Card;
