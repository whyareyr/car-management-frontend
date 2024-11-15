import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext.js";
import LoginPage from "./pages/LoginPage.js";
import Homepage from "./pages/HomePage.js";
import SignupPage from "./pages/SignupPage.js";
import ProductListPage from "./pages/ProductListPage.js";
import ProductCreationPage from "./pages/ProductCreationPage.js";
import Navbar from "./components/Navbar.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cars/new" element={<ProductCreationPage />} />
          <Route path="/cars" element={<ProductListPage />} />
          <Route path="/cars/:id" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
