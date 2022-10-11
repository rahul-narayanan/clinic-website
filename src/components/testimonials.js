import React, { forwardRef } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { TestimonialsData } from "../store/testimonials-data";
import TestimonialCard from "./testimonial-card";

const Testimonials = forwardRef((props, ref) => {
    function renderList() {
        return (
            <Carousel
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible
                cycleNavigation={false}
            >
                {TestimonialsData.map((testimonialsArr, i) => (
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                        alignContent="center"
                        key={`testimonial_container_${i}`}
                    >
                        {testimonialsArr.map((data, index) => (
                            <Grid
                                item
                                xs={3.5}
                                key={`testimonial_card_${i}_${index}`}
                            >
                                <TestimonialCard data={data} />
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Carousel>
        );
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
                sx={{ mb: 4, textAlign: "center" }}
            >
                Testimonials
            </Typography>
            {renderList()}
        </Paper>
    );
});

export default Testimonials;
