import Navigation from "../components/Navigation";

const Layout = (props) => {
    return (
        <div>
            <Navigation isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn}/>
            <main>{props.children}</main>
        </div>
    );
}

export default Layout;