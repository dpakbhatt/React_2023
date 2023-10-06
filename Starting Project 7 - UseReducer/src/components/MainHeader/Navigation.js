import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  const cntxt = useContext(AuthContext);

  return (
    // CONSUMER APPROACH
    // <AuthContext.Consumer>
    //   {(cntxt) => {
    //     return (
    //       <nav className={classes.nav}>
    //         <ul>
    //           {cntxt.isLoggedIn && (
    //             <li>
    //               <a href="/">Users</a>
    //             </li>
    //           )}
    //           {cntxt.isLoggedIn && (
    //             <li>
    //               <a href="/">Admin</a>
    //             </li>
    //           )}
    //           {cntxt.isLoggedIn && (
    //             <li>
    //               <button onClick={props.onLogout}>Logout</button>
    //             </li>
    //           )}
    //         </ul>
    //       </nav>
    //     );
    //   }}
    // </AuthContext.Consumer>

    // USECONTEXT APPROACH
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
};

export default Navigation;
