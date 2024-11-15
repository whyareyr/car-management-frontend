// src/api.js
const API_URL = "http://localhost:5000/api"; // Adjust backend URL

const api = {
  register: async (userData) => {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },
  login: async (userData) => {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },
  createCar: async (carData, token) => {
    const response = await fetch(`${API_URL}/cars`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: carData,
    });
    return await response.json();
  },
  getCars: async (token) => {
    const response = await fetch(`${API_URL}/cars`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
  },
  getCarById: async (id, token) => {
    const response = await fetch(`${API_URL}/cars/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
  },
  // updateCar: async (id, carData, token) => {
  //   const response = await fetch(`${API_URL}/cars/${id}`, {
  //     method: "PUT",
  //     headers: { Authorization: `Bearer ${token}` },
  //     body: carData,
  //   });
  //   return await response.json();
  // },
  updateCar: async (id, carData, token) => {
    const response = await fetch(`${API_URL}/cars/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData), // Convert to JSON format
    });
    return await response.json();
  },

  deleteCar: async (id, token) => {
    await fetch(`${API_URL}/cars/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default api;
