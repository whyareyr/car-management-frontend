// src/pages/ProductListPage.js
import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext.js";
import api from "../api.js";
import CarList from "../components/CarList.js";
import { useNavigate } from "react-router-dom";

const ProductListPage = () => {
  const { token } = useAuth();
  const [cars, setCars] = useState([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchCars = async () => {
      const carsData = await api.getCars(token);
      setCars(carsData);
    };

    fetchCars();
  }, [token, navigate]); // Added navigate to the dependency array

  if (!token) {
    return <div>Loading...</div>; // Optionally show a loading state until the redirect happens
  }

  return (
    <div>
      <h1>Your Cars</h1>
      <CarList cars={cars} />
    </div>
  );
};

export default ProductListPage;
