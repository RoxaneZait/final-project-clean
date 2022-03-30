import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from './Navigation.module.scss';

const Navigation = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const toggleAuth = () => {
        isLoggedIn ? navigate('/') : navigate('/auth') //if statement
        setIsLoggedIn(!isLoggedIn);
    }

    return (
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}> Social Media App</div>
        </Link>
        <nav>
          <ul className={classes.menu}>
            <li className={classes.menuItem}>
              <Link to="/">Profile</Link>
            </li>
            <li className={classes.menuItem}>
              <Link to="/friends">Friends</Link>
            </li>
            <li className={classes.menuItem}>
              <Link to="/chat">Chat</Link>
            </li>
            <li className={classes.menuItem}>
              <button onClick={toggleAuth}>
                {isLoggedIn ? "Login" : "Logout"}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Navigation;