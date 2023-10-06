import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(cntxt) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {cntxt.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {cntxt.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {cntxt.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
