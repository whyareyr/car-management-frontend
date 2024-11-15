import React from "react";
import { Link } from "react-router-dom";

const CarList = ({ cars = [] }) => {
  if (!Array.isArray(cars)) {
    console.warn("Expected `cars` to be an array, but received:", cars);
    return <p>No cars available to display.</p>;
  }

  return (
    <ul>
      {cars.length > 0 ? (
        cars.map((car) => (
          <li key={car._id}>
            {console.log(car)}{" "}
            <Link to={`/cars/${car._id}`}>
              {console.log(car._id)} {/* Debugging */}
              {car.title}
            </Link>
          </li>
        ))
      ) : (
        <p>No cars available to display.</p>
      )}
    </ul>
  );
};

export default CarList;
