// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext.js";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Navbar = () => {
  const { logout, token } = useAuth(); // Assume token indicates if the user is logged in

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Car Management
        </Typography>
        <Button color="inherit" component={Link} to="/cars">
          Your Cars
        </Button>
        <Button color="inherit" component={Link} to="/cars/new">
          Add Car
        </Button>
        {!token ? ( // Check if user is not logged in
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
