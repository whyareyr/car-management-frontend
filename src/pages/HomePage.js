import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid2,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Container sx={{ mt: 4, textAlign: "center" }}>
        {/* Hero Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" gutterBottom>
            Find Your Dream Car
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Discover a wide range of cars at unbeatable prices.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/cars"
          >
            Browse Cars
          </Button>
        </Box>

        {/* Features Section */}
        <Typography variant="h4" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2
            item
            xs={12}
            sm={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Quality Assurance
              </Typography>
              <Typography variant="body1">
                We ensure every car meets our high standards for quality and
                performance.
              </Typography>
            </Paper>
          </Grid2>
          <Grid2
            item
            xs={12}
            sm={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Competitive Pricing
              </Typography>
              <Typography variant="body1">
                Our prices are transparent and competitive to ensure you get the
                best deal.
              </Typography>
            </Paper>
          </Grid2>
          <Grid2
            item
            xs={12}
            sm={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Excellent Customer Service
              </Typography>
              <Typography variant="body1">
                Our team is dedicated to providing you with a seamless car
                buying experience.
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default LandingPage;
