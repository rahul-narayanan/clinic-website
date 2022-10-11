import React, { forwardRef } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const libraries = ["places"];

const MapContainerStyle = {
    width: "100%",
    height: "100%"
};

const defaultCenter = {
    lat: 42.317432,
    lng: -83.026772
};

const ContactUs = forwardRef((props, ref) => {
    const { isLoaded } = useJsApiLoader({
        id: "google-maps-script",
        libraries,
        googleMapsApiKey
    });

    function renderForm() {
        return (
            <Box
                component="form"
                noValidate
                autoComplete="off"
                ml={2}
                sx={{ width: "90%" }}
            >
                <TextField
                    required
                    id="name"
                    label="Name"
                    fullWidth
                    sx={{ mb: 3 }}
                />
                <TextField
                    required
                    id="email"
                    label="Email address"
                    fullWidth
                    sx={{ mb: 3 }}
                />
                <Button
                    variant="contained"
                    // sx={{ color: "#fff" }}
                    color="secondary"
                >
                    Submit
                </Button>
            </Box>
        );
    }

    if (!isLoaded) {
        return "";
    }

    return (
        <Paper
            sx={{ p: 3 }}
            elevation={5}
            ref={ref}
        >
            <Typography
                variant="h4"
                color="grey"
                mb={3}
            >
                Contact
            </Typography>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={6}
                    sx={{
                        height: "60vh"
                    }}
                >
                    <GoogleMap
                        mapContainerStyle={MapContainerStyle}
                        center={defaultCenter}
                        zoom={14}
                    />
                </Grid>
                <Grid
                    item
                    xs={6}
                    container
                    spacing={2}
                    mt={1}
                >
                    {renderForm()}
                </Grid>
            </Grid>
        </Paper>
    );
});

export default ContactUs;
