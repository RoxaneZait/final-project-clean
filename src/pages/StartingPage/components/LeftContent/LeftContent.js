import classes from './LeftContent.module.scss'
import  MenuItem  from '../../../../components/MenuItem';
import SideMenu from '../../../../components/SideMenu';
import peopleIcon from "../../../../assets/people-icon.png"
import groupIcon from "../../../../assets/people-group-icon.png"
import shopIcon from "../../../../assets/shop-icon.png";
import playerIcon from "../../../../assets/player-icon.png"
import watchIcon from "../../../../assets/watch-icon.png"
import bookmarkIcon from "../../../../assets/bookmark-icon.png"
import dashboardIcon from "../../../../assets/dashboard-icon.png"

const LeftContent = () => {
    return (
      <div className={classes.leftContent}>
      <SideMenu>
        <MenuItem>
          <img src={peopleIcon} alt="Friends" />
          Friends
        </MenuItem>
        <MenuItem>
          <img src={groupIcon} alt="Groups" />
          Groups
        </MenuItem>
        <MenuItem>
          <img src={shopIcon} alt="Marketplace" />
          Marketplace
        </MenuItem>
        <MenuItem>
          <img src={playerIcon} alt="Watch" />
          Watch
        </MenuItem>
        <MenuItem>
          <img src={watchIcon} alt="Memories" />
          Memories
        </MenuItem>
        <MenuItem>
          <img src={bookmarkIcon} alt="Saved" />
          Saved
        </MenuItem>
        <MenuItem>
          <img src={dashboardIcon} alt="Dashboard" />
          Professional Dashboard
        </MenuItem>
      </SideMenu>
      </div>
    );
}

export default LeftContent;