import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api.js";
import CarForm from "../components/CarForm.js";
import { useAuth } from "../AuthContext.js";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the car ID from the URL
  const { token } = useAuth(); // Get the authentication token from context
  const navigate = useNavigate(); // Hook for navigation
  const [car, setCar] = useState(null); // State to hold car details
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode
  const [openDialog, setOpenDialog] = useState(false); // State for image dialog
  const [selectedImage, setSelectedImage] = useState(""); // State for selected image

  // Fetch car details when the component mounts or the ID/token changes
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const carData = await api.getCarById(id, token);
        if (carData) {
          setCar(carData);
        } else {
          console.error("Car not found");
        }
      } catch (error) {
        console.error("Failed to fetch car:", error);
      }
    };

    if (token && id) {
      fetchCar();
    }
  }, [id, token]);

  // Handle car update
  const handleUpdateCar = async (formData) => {
    const formObject = Object.fromEntries(formData.entries()); // Convert FormData to JSON
    try {
      const result = await api.updateCar(id, formObject, token);
      if (result && result._id) {
        navigate("/cars"); // Navigate to cars list after successful update
      } else {
        console.error("Failed to update car:", result);
      }
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  // Handle car deletion
  const handleDeleteCar = async () => {
    try {
      await api.deleteCar(id, token);
      navigate("/cars"); // Redirect after deleting
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  // Open image dialog
  const handleOpenDialog = (image) => {
    setSelectedImage(image);
    setOpenDialog(true);
  };

  // Close image dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (!car)
    return (
      <CircularProgress
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    ); // Loading state while fetching car details

  return (
    <Box sx={{ minHeight: "100vh", p: 3, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {car.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {car.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tags: {car.tags.join(", ")}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit"}
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleDeleteCar}
              >
                Delete
              </Button>
            </Box>
            {isEditing && <CarForm car={car} onSubmit={handleUpdateCar} />}
          </Grid>

          {/* Image Grid */}
          <Grid container spacing={2}>
            {car.images.map((image, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Card
                  onClick={() => handleOpenDialog(image)}
                  sx={{ cursor: "pointer" }}
                >
                  <img
                    src={image}
                    alt={`Car Image ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Image Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{ position: "absolute", right: 8, top: 8, color: "grey.500" }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <img
              src={selectedImage}
              alt="Expanded Car"
              style={{ width: "100%", height: "auto" }}
            />
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;
