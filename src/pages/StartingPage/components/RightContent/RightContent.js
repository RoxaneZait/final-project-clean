import classes from "./RightContent.module.scss";
import SideMenu from "../../../../components/SideMenu";
import MenuItem from "../../../../components/MenuItem";
import peopleIcon from "../../../../assets/people-icon.png"
import catPicture from "../../../../assets/cat.jpeg";


const RightContent = () => {
  return (
    <div className={classes.rightContent}>
      <div className={classes.badge}>
        <header>
          <img src={peopleIcon} alt="Friends" />
          Friend requests
        </header>
        <div className={classes.content}>
          <img
            className={classes.roundedCircle}
            src={catPicture}
            alt="Profile"
          />
          <div className={classes.info}>
            Mister Garfield
            <div>
              <img
                className={`${classes.roundedCircle} ${classes.small} ${classes.first}`}
                src={catPicture}
                alt="Profile"
              />
              <img
                className={`${classes.roundedCircle} ${classes.small} ${classes.last}`}
                src={catPicture}
                alt="Profile"
              />
              <p>10 mutual Friends</p>
            </div>
            <div className={classes.buttons}>
              <button className={classes.confirm}>Confirm</button>
              <button className={classes.cancel}>Remove</button>
            </div>
          </div>
        </div>
      </div>
      <SideMenu>
        <MenuItem>Contacts</MenuItem>
        <MenuItem>Ceva</MenuItem>
        <MenuItem>Ceva</MenuItem>
        <MenuItem>Ceva</MenuItem>
        <MenuItem>Ceva</MenuItem>
        <MenuItem>Ceva</MenuItem>
        <MenuItem>Ceva</MenuItem>
      </SideMenu>
    </div>
  );
};

export default RightContent;
