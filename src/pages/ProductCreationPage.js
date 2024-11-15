import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../api.js";
import CarForm from "../components/CarForm.js";
import { useAuth } from "../AuthContext.js";

const ProductCreationPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
    return null;
  }

  const handleCreateCar = async (formData) => {
    try {
      await api.createCar(formData, token);
      navigate("/cars"); // Redirect to the car list after successful creation
    } catch (error) {
      console.error("Error creating car:", error);
    }
  };

  return (
    <div>
      <h1>Create a New Car</h1>
      <CarForm onSubmit={handleCreateCar} />
    </div>
  );
};

export default ProductCreationPage;
