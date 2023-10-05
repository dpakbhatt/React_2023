import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersData, setUsersData] = useState([]);

  const usersHandler = (userInput) => {
    setUsersData((prevState) => {
      return [...prevState, userInput];
    });
  };

  return (
    <div>
      <AddUser userAdded={usersHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
