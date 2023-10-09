import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (username, age) => {
    setUsers((prevState) => {
      return [...prevState, { name: username, age: age }];
    });
    console.log(JSON.stringify(users));
  };

  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
