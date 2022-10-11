import React, { forwardRef } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { green } from "@mui/material/colors";
import Carousel from "react-material-ui-carousel";
import BlogCard from "./blog-card";
import { BlogsData } from "../store/blog-data";

const Blogs = forwardRef((props, ref) => {
    function renderBlogs() {
        return (
            <Carousel
                animation="slide"
                navButtonsAlwaysVisible
                indicators={false}
                cycleNavigation={false}
            >
                {BlogsData.map((blogsArr, i) => (
                    <Grid
                        container
                        spacing={6}
                        justifyContent="center"
                        alignContent="center"
                        key={`blog_container_${i}`}
                    >
                        {blogsArr.map((data, index) => (
                            <Grid
                                item
                                xs={3.5}
                                key={`blog_card_${i}_${index}`}
                            >
                                <BlogCard data={data} />
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
                sx={{ mb: 2, textAlign: "center" }}
            >
                Blog
            </Typography>
            {renderBlogs()}
        </Paper>
    );
});

export default Blogs;
