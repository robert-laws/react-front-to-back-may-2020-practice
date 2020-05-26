import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import NewUserForm from './forms/NewUserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Cobb',
      age: 34
    }
  ]);

  const updateUsers = ({ firstName, lastName, age }) => {
    setUsers([
      ...users,
      {
        id: uuidv4(),
        firstName,
        lastName,
        age
      }
    ])
  }

  return (
    <div className="App">
      <h2>Users App</h2>
      <hr/>
      <h4>User List</h4>
      <UserList users={users} />
      <hr/>
      <NewUserForm updateUsers={updateUsers} />
    </div>
  );
}

export default App;
