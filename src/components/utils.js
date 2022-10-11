import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: grey[600]
    }
});

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: "none",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(20),
        // padding: theme.spacing(1),
        color: grey[800],
        backgroundColor: grey[200],
        "&.Mui-selected": {
            color: grey[800],
            backgroundColor: grey[400]
        },
        "&.Mui-focusVisible": {
            backgroundColor: "rgba(100, 95, 228, 0.32)"
        }
    })
);

export function TabPanel(props) {
    const {
        children, value, index, ...other
    } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography component="span">{children}</Typography>
            </Box>
            )}
        </div>
    );
}

export function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}
