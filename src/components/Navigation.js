import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import classes from './Navigation.module.scss';

const Navigation = (props) => {
    let navigate = useNavigate();
    
    const onButtonClick = () => {
      props.setIsLoggedIn(!props.isLoggedIn);
      navigate(props.isLoggedIn ? "/" : "/feed")
    }

    return (
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>
            <FaFacebook />
            <span> facebook</span>
            <div className={classes.search}>
              <input
                className={classes.searchBar}
                type="text"
                placeholder="Search Facebook..."
              />
            </div>
          </div>
        </Link>
        <nav>
          <ul className={classes.menu}>
            {props.isLoggedIn ? 
            <>
              <li className={classes.menuItem}>
                <Link to="/">Profile</Link>
              </li><li className={classes.menuItem}>
                  <Link to="/friends">Friends</Link>
                </li><li className={classes.menuItem}>
                  <Link to="/chat">Chat</Link>
              </li>
            </> : 
            ""}
            <li className={classes.menuItem}>
              <button onClick={onButtonClick}>{props.isLoggedIn ? "Log out" : "Log in"}</button>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Navigation;