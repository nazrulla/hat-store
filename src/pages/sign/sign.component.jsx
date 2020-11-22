import React from "react";
import "./sign.styles.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
const Sign = () => (
  <div className="sign">
    <SignIn />
    <SignUp />
  </div>
);
export default Sign;
