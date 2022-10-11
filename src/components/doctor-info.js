import React, { forwardRef } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Avatar, Divider } from "@mui/material";
import DoctorImage from "../images/doctor-image.svg";

const DoctorInfo = forwardRef((props, ref) => (
    <Paper
        sx={{ p: 3 }}
        elevation={5}
        ref={ref}
    >
        <Grid container spacing={2}>
            <Grid item xs={4}>
                {/* <Avatar src={DoctorImage} /> */}
                <img src={DoctorImage} style={{ width: "95%" }} />
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h5" mb={2}>
                    Doctor Name
                </Typography>
                <Divider />
                <Grid
                    container
                    spacing={2}
                    mt={1}
                >
                    <Grid item xs={4}>
                        <Typography variant="subtitle1">
                            10
                        </Typography>
                        <Typography variant="subtitle2">
                            Awards
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1">
                            300
                        </Typography>
                        <Typography variant="subtitle2">
                            Patients Attended
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1">
                            90%
                        </Typography>
                        <Typography variant="subtitle2">
                            Success %
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Paper>
));

export default DoctorInfo;
