// src/components/AuthForm.js
import React, { useState } from "react";
import api from "../api.js";
import { useAuth } from "../AuthContext.js";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthForm = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    const response = isLogin
      ? await api.login(userData)
      : await api.register(userData);

    if (response.token) {
      login(response.token);
      navigate("/cars");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" gutterBottom>
        {isLogin ? "Login" : "Sign Up"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </form>
    </Container>
  );
};

export default AuthForm;
