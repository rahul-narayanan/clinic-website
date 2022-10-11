import Box from "@mui/material/Box";
import React, { forwardRef } from "react";
import Carousel from "react-material-ui-carousel";

import SliderImage1 from "../images/slider-image-1.svg";
import SliderImage2 from "../images/slider-image-2.svg";

const ImageList = [SliderImage1, SliderImage2];

const ImageSlider = forwardRef((props, ref) => (
    <Box ref={ref}>
        <Carousel
            animation="slide"
            indicators
            height={450}
            navButtonsAlwaysVisible
        >
            {ImageList.map((img, index) => (
                <img
                    src={img}
                    key={`image_slider_${index}`}
                    style={{ width: "100%", height: "100%" }}
                />
            ))}
        </Carousel>
    </Box>
));

export default ImageSlider;
