import React, { useState } from "react";
import api from "../api.js";
import { useAuth } from "../AuthContext.js";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";

const ProductCreationPage = () => {
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("title", title);
    formData.append("description", description);
    formData.append(
      "tags",
      tags.split(",").map((tag) => tag.trim())
    ); // Split and trim tags

    await api.createCar(formData, token);
    // Redirect or show success message...
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Create a New Car
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Tags (comma-separated)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              required
              style={{ marginTop: "16px" }} // Added margin for spacing
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create Car
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ProductCreationPage;
