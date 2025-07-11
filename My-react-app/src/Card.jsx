import React from 'react'
import profilePic from './assets/pic.png'

const Card = () => {
  return (
    <div className='card'>
      <img className='card-image' src={profilePic} alt="profile picture" />
      <h2 className='card-title'>Agie_Junior7</h2>
      <p className='card-text'>I am a front end developer and I play football</p>
      
    </div>
  )
}

export default Card
