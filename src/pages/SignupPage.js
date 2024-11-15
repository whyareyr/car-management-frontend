// src/pages/SignupPage.js
import React from "react";
import AuthForm from "../components/AuthForm.js";

const SignupPage = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <AuthForm isLogin={false} />
    </div>
  );
};

export default SignupPage;
