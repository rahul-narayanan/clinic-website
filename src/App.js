import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import { useCallback, useRef } from "react";
import Topbar from "./components/topbar";
import ImageSlider from "./components/image-slider";
import Services from "./components/services";
import Blogs from "./components/blogs";
import Testimonials from "./components/testimonials";
import DoctorInfo from "./components/doctor-info";
import ContactUs from "./components/contact-us";
import Footer from "./components/footer";

const theme = createTheme({
    palette: {
        primary: {
            main: green[300]
        },
        secondary: {
            main: grey[600]
        },
        white: {
            main: "#fff"
        },
        grey: {
            main: grey[600]
        },
        darkGrey: {
            main: grey[800]
        }
    },
    typography: {
        fontFamily: "\"Lato\"",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600
    }
});

const scrollingOptions = {
    behavior: "smooth",
    block: "center"
};

export default function App() {
    const imageSliderRef = useRef(null);
    const servicesRef = useRef(null);
    const blogsRef = useRef(null);
    const testimonialsRef = useRef(null);
    const doctorInfoRef = useRef(null);
    const contactRef = useRef(null);

    const handleMenuClick = useCallback((menu) => {
        switch (menu) {
            case "Home":
                imageSliderRef.current.scrollIntoView(scrollingOptions);
                break;
            case "Services":
                servicesRef.current.scrollIntoView(scrollingOptions);
                break;
            case "Blog":
                blogsRef.current.scrollIntoView(scrollingOptions);
                break;
            case "Reviews":
                testimonialsRef.current.scrollIntoView(scrollingOptions);
                break;
            case "About":
                doctorInfoRef.current.scrollIntoView(scrollingOptions);
                break;
            case "Contact":
                contactRef.current.scrollIntoView(scrollingOptions);
                break;
            default:
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Topbar onMenuClick={handleMenuClick} />
                <Box
                    component="main"
                    sx={{
                        p: 3, flexGrow: 1
                    }}
                >
                    <Toolbar />
                    <Stack
                        spacing={7}
                        mt={3}
                        // divider={<Divider flexItem />}
                    >
                        <ImageSlider ref={imageSliderRef} />
                        <Services ref={servicesRef} />
                        <Blogs ref={blogsRef} />
                        <Testimonials ref={testimonialsRef} />
                        <DoctorInfo ref={doctorInfoRef} />
                        <ContactUs ref={contactRef} />
                    </Stack>
                </Box>
                <Footer />
            </Box>
        </ThemeProvider>
    );
}
