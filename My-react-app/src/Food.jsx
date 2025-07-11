import React from 'react'

const Food = () => {
  const food1="orange";
  const food2="banana";
  return (
    <div>
      <ul>
        <li>Apple</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
      </ul>
    </div>
  )
}

export default Food
