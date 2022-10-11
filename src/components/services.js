import React, { forwardRef } from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import {
    a11yProps, StyledTab, StyledTabs, TabPanel
} from "./utils";
import { ServicesData } from "../store/services-data";

const Services = forwardRef((props, ref) => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    function renderList(list) {
        return (
            <Grid
                container
                justifyContent="center"
                alignContent="center"
            >
                {list.map((obj, index) => (
                    <Grid
                        key={`services_${selectedTab}_${index}`}
                        container
                        item
                        xs={6}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={2}>
                            <img src={obj.img} style={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography>
                                {obj.text}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        );
    }

    function renderTabs() {
        return (
            <>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <StyledTabs
                        value={selectedTab}
                        onChange={handleChange}
                        aria-label="services-tabs"
                        // variant="fullWidth"
                    >
                        {ServicesData.map((data, index) => (
                            <StyledTab
                                key={`${data.id}_tab`}
                                label={data.name}
                                {...a11yProps(index)}
                            />
                        ))}
                        {/* <StyledTab label="Ayurveda" {...a11yProps(0)} />
                        <StyledTab label="Homeopathy" {...a11yProps(1)} /> */}
                    </StyledTabs>
                </Box>
                {ServicesData.map((data, index) => (
                    <TabPanel
                        value={selectedTab}
                        index={index}
                        key={`${data.id}_tabpanel`}
                    >
                        {renderList(data.list)}
                    </TabPanel>
                ))}
            </>
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
                sx={{ mb: 2 }}
            >
                Services
            </Typography>
            {renderTabs()}
        </Paper>
    );
});

export default Services;
