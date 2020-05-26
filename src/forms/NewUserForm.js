import React, {useState } from 'react'

const NewUserForm = ({ updateUsers }) => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    age: ''
  })

  const handleChange = event => {
    setNewUser({ 
      ...newUser, 
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newUser);

    updateUsers(newUser)

    setNewUser({
      firstName: '',
      lastName: '',
      age: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" value={newUser.firstName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="firstName">Last Name:</label>
          <input type="text" name="lastName" value={newUser.lastName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="text" name="age" value={newUser.age} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Add New User</button>
        </div>
      </form>
    </div>
  )
}

export default NewUserForm
