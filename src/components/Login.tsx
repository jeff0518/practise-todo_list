import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setFormIsValid(
      event.target.value.includes("@") && password.trim().length > 6
    );
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 6 && email.includes("@")
    );
  };

  const handleValidateEmail = () => {
    setEmailIsValid(email.includes("@"));
  };

  const handleValidatePassword = () => {
    setPasswordIsValid(password.trim().length > 6);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(email, password);
  };

  return (
    <Card classStyle="w-11/12 max-w-2xl p-4 mx-auto my-4">
      <form onSubmit={handleSubmit}>
        <div
          className={`my-4 flex items-stretch flex-col ${
            emailIsValid === false ? "border-red-500 bg-[#fbdada]" : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            className="flex-3 w-full font-inherit py-1.5 px-2 rounded-md border border-gray-300"
            type="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
            onBlur={handleValidateEmail}
          />
        </div>
        <div
          className={`my-4 flex items-stretch flex-col ${
            passwordIsValid === false ? "border-red-500 bg-[#fbdada]" : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            className="flex-3 w-full font-inherit py-1.5 px-2 rounded-md border border-gray-300"
            type="password"
            id="password"
            value={password}
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
