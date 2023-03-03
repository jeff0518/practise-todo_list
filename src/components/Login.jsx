import React, { useEffect, useReducer, useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.val, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.val, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("正在執行");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);
    return () => {
      console.log("清除中");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const handleChangeEmail = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const handleChangePassword = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const handleValidateEmail = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const handleValidatePassword = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card classStyle="w-11/12 max-w-2xl p-4 mx-auto my-4">
      <form onSubmit={handleSubmit}>
        <div
          className={`my-4 flex items-stretch flex-col ${
            emailState.isValid === false ? "border-red-500 bg-[#fbdada]" : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            className="flex-3 w-full font-inherit py-1.5 px-2 rounded-md border border-gray-300"
            type="email"
            id="email"
            value={emailState.value}
            onChange={handleChangeEmail}
            onBlur={handleValidateEmail}
          />
        </div>
        <div
          className={`my-4 flex items-stretch flex-col ${
            passwordState.isValid === false ? "border-red-500 bg-[#fbdada]" : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            className="flex-3 w-full font-inherit py-1.5 px-2 rounded-md border border-gray-300"
            type="password"
            id="password"
            value={passwordState.value}
            onChange={handleChangePassword}
            onBlur={handleValidatePassword}
          />
        </div>
        <div className="text-center">
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
