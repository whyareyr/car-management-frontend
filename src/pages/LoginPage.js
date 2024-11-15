// src/pages/LoginPage.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AuthForm from "../components/AuthForm.js";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    toast.info("Logged Out Successfully!");
    navigate("/cars");
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm isLogin={true} onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
