import classes from "./RightContent.module.scss";
import SideMenu from "../../../../components/SideMenu";
import MenuItem from "../../../../components/MenuItem";
import peopleIcon from "../../../../assets/people-icon.png"
import catPicture from "../../../../assets/cat.jpeg";
import misterWhiskers from "../../../../assets/misterwhiskers.jpg";
import misterThomas from "../../../../assets/misterthomas.jpg";
import jerryTheMouse from "../../../../assets/jerrymouse.jpg";
import missOlivia from "../../../../assets/missolivia.png";
import missRachel from "../../../../assets/missrachel.jpg"
import roberTheMilkman from "../../../../assets/robertthemilkman.jpeg"


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
        <span>Contacts</span>
        <MenuItem>
          <div
            style={{ backgroundImage: `url(${misterWhiskers})` }}
            className={classes.friendsPhoto}
          ></div>
          Mister Whiskers
        </MenuItem>
        <MenuItem>
          <div
            style={{ backgroundImage: `url(${misterThomas})` }}
            className={classes.friendsPhoto}
          ></div>
          Mister Thomas
        </MenuItem>
        <MenuItem>
          <div
            style={{ backgroundImage: `url(${jerryTheMouse})` }}
            className={classes.friendsPhoto}
          ></div>
          Jerry the Mouse
        </MenuItem>
        <MenuItem>
          <div
            style={{ backgroundImage: `url(${roberTheMilkman})` }}
            className={classes.friendsPhoto}
          ></div>
          Robert the Milkman
        </MenuItem>
        <MenuItem>
          <div
            style={{ backgroundImage: `url(${missOlivia})` }}
            className={classes.friendsPhoto}
          ></div>
          Miss Olivia
        </MenuItem>
        <MenuItem>
          <div
            style={{ backgroundImage: `url(${missRachel})` }}
            className={classes.friendsPhoto}
          ></div>
          Miss Rachel
        </MenuItem>
      </SideMenu>
    </div>
  );
};

export default RightContent;
