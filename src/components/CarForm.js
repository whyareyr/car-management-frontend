import React, { useState } from "react";
import { useAuth } from "../AuthContext.js";
import { TextField, Button, Container, Typography } from "@mui/material";

const CarForm = ({ car, onSubmit }) => {
  const { token } = useAuth();
  const [title, setTitle] = useState(car ? car.title : "");
  const [description, setDescription] = useState(car ? car.description : "");
  const [tags, setTags] = useState(car ? car.tags.join(", ") : "");
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
    ); // Ensure tags are split and trimmed

    await onSubmit(formData, token);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        {car ? "Edit Car" : "Add A New Car"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          required
          style={{ marginTop: "16px" }} // Added margin to file input for spacing
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "16px" }} // Added margin for button spacing
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CarForm;
