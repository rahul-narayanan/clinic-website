import React from "react";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Logo from "../images/logo.png";

const drawerWidth = 240;

const navItems = ["Home", "Services", "Blog", "Reviews", "About", "Contact"];

export default function Topbar(props) {
    const { window, onMenuClick } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Link href="/">
                    <img src={Logo} style={{ width: 70, height: 70 }} />
                </Link>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item}
                        disablePadding
                        onClick={() => {
                            setMobileOpen(false);
                            onMenuClick(item);
                        }}
                    >
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar component="nav" color="white">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        <Link href="/">
                            <img src={Logo} style={{ width: 60, height: 60 }} />
                        </Link>
                        {/* <Typography
                            variant="h6"
                            component="span"
                            sx={{ verticalAlign: "middle" }}
                            color="darkGrey"
                        >
                            Clinic Name
                        </Typography> */}
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                color="darkGrey"
                                variant="text"
                                sx={{ mr: 1 }}
                                onClick={() => onMenuClick(item)}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
}
