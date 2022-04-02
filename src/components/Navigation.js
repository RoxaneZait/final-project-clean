import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import classes from './Navigation.module.scss';

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = (state) => {
      if (state === "agree") {
        setOpen(false);
        navigate("/auth");
        setIsLoggedIn(!isLoggedIn);
      } else {
        setOpen(false);
      }
    };

    const login = () => {
      navigate("/");
      setIsLoggedIn(!isLoggedIn);
    };

    const toggleAuth = () => {
      isLoggedIn ? login() : handleClickOpen();
    }

    return (
      <div>
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>
            {/* <a href="#"></a> */}
            <FaFacebook />
            <span> facebook</span>
          </div>
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

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose('disagree')}>Disagree</Button>
            <Button variant="outlined" onClick={() => handleClose('agree')} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      </div>
    );
}

export default Navigation;