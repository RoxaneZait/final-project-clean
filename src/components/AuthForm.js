import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import classes from "./AuthForm.module.scss";
import axios from "axios";

const AuthForm = () => {
  const [isLogIn, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const userInputRef = useRef();
  const passwordInputRef = useRef();

  const toggleAuthState = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const usernameValue = userInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;

    if (isLogIn) {
      axios
        .post("/login", {
          username: usernameValue,
          password: passwordValue,
        })
        .then(function (response) {
          setTimeout(() => {
            setIsLoading(false);
            navigate("/");
          }, 2000);
        })
        .catch(function (error) {
          setTimeout(() => {
            setIsLoading(false);
            setIsError((prevState) => !prevState);
          }, 2000);
        });
    } else {
      axios
        .post("/signup", {
          username: usernameValue,
          password: passwordValue,
        })
        .then(function (response) {
          setTimeout(() => {
            setIsLoading(false);
            toggleAuthState();
          }, 2000);
        })
        .catch(function (error) {
          setTimeout(() => {
            setIsLoading(false);
            setIsError((prevState) => !prevState);
          }, 2000);
        });
    }

    userInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  const actionIsLoading = <p>Sending request...</p>;
  const actionIsNotLoading = (
    <button>{isLogIn ? "Log in" : "Create new account"}</button>
  );

  return (
    <section className={classes.auth}>
      <h1>{isLogIn ? "Login" : "Sign up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Enter your email</label>
          <input type="email" id="email" required ref={userInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          ></input>
        </div>

        <div className={classes.actions}>
          {/* {isLoading && <p>Sending request...</p>}
            {!isLoading && (
              <button>{isLogIn ? "Log in" : "Create new account"}</button>
            )} */}

          {isLoading ? actionIsLoading : actionIsNotLoading}
          {isError && <p>Please try again</p>}
          <button className={classes.toggle} onClick={toggleAuthState}>
            {isLogIn ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
