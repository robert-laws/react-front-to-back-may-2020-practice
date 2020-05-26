import React, {useState } from 'react'

const NewUserForm = ({ updateUsers }) => {
  const [newUser, setNewUser] = useState({
    id: 2,
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
          <input type="submit" value="Add New User"/>
        </div>
      </form>
    </div>
  )
}

export default NewUserForm
