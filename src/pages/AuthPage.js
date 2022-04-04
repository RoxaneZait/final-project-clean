import AuthForm from "../components/AuthForm";
import classes from "./AuthPage.module.scss"

const AuthPage = () => {
    return (
        <div className={classes.authPage}>
            <AuthForm></AuthForm>
        </div>
    );
}

export default AuthPage;