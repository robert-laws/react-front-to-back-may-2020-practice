import React from 'react'

const User = ({ user: { firstName, lastName, age} }) => {
  return (
    <div>
      <p>{firstName} {lastName}</p>
      <p>{age}</p>
    </div>
  )
}

export default User
