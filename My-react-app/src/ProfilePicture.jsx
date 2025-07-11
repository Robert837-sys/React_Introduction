import React from 'react'
import pic from './assets/pic.png'

const ProfilePicture = () => {
  const handleClick = (e) => e.target.style.display = "none"
  return (
    <div>
      <img onClick={handleClick} src={pic} alt="Profile" />
    </div>
  )
}

export default ProfilePicture
