import classes from "./SideMenu.module.scss"
import MenuItem from "./MenuItem"

const SideMenu = (props) => {
    return <aside className={classes.sideMenu}>{props.children}</aside>
}

export default SideMenu;
