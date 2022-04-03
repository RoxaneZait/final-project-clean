import classes from "./MenuItem.module.scss"

const MenuItem = (props) => {
    return <div className={classes.menuItem}>{props.children}</div>;
}


export default MenuItem