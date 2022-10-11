import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

export default function Footer() {
    return (
        <Box sx={{ bgcolor: green[50], p: 1 }}>
            <Typography
                color="grey"
                component="div"
                sx={{ textAlign: "center" }}
            >
                Copyright © 2021 Company name
            </Typography>
        </Box>
    );
}
