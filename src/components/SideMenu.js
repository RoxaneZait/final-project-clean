import classes from "./SideMenu.module.scss"

const SideMenu = (props) => {
    return <aside className={classes.sideMenu}>{props.children}</aside>
}

export default SideMenu;
