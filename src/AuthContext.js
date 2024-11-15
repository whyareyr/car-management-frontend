// src/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify"; // Import the toast function
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    toast.success("Logged In Successfully!"); // Show toast on login
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    toast.info("Logged Out Successfully!"); // Show toast on logout
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
