import propTypes from 'prop-types'
import React from 'react'


const UserGreeting = (props) => {
  const welcomeMessage =  <h2 className='welcome-message'>Welcome {props.userName}</h2>

  const logInPrompt = <h2 className='login-prompt'>Please login</h2>
  
  return (props.isLoggedIn ? welcomeMessage : logInPrompt)
 
}
UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool.isRequired,
  userName: propTypes.string.isRequired
}
UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: 'Guest'
}
export default UserGreeting
