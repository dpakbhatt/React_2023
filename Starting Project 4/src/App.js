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
    <React.Fragment>
      <AddUser userAdded={usersHandler} />
      <UsersList users={usersData} />
    </React.Fragment>
  );
}

export default App;
