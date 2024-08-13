// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { AddWorkForm } from "./AddWorkForm";

const drawerWidth = 320;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 3),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
}));

export function HeaderMenu({
    theme,
    open,
    handleDrawerOpen,
    handleDrawerClose,
    handleInputChange,
    newArtwork,
    handleAddArtwork,
}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ opacity: "0.85", backgroundColor: "#000000" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontFamily: '"Kolker Brush", cursive', fontSize: "50px" }}
                    >
                        Ana&apos;s work art collection
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        marginTop: "80px",
                        width: drawerWidth,
                        boxSizing: "border-box",
                        boxShadow: 3,
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    {/* <Typography fontWeight="fontWeightBold" variant="h5">
                        Ana&apos;s work art collection
                    </Typography> */}
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider sx={{ width: "85%", textAlign: "center", margin: "0 auto" }} />
                <Typography
                    variant="h6"
                    style={{ width: "260px", textAlign: "left", padding: theme.spacing(2, 3) }}
                    fontWeight="fontWeightBold"
                >
                    Welcome,
                    {/* {userInput.username} */}
                    {/* <Typography style={{ fontSize: "14px" }} color={mySecondaryColor}>
                        Sort your todos by date using the view on the right
                    </Typography> */}
                </Typography>
                <Divider sx={{ width: "85%", textAlign: "center", margin: "0 auto" }} />

                <AddWorkForm
                    theme={theme}
                    handleInputChange={handleInputChange}
                    newArtwork={newArtwork}
                    handleAddArtwork={handleAddArtwork}
                />

                <Button
                    variant="outlined"
                    sx={{
                        color: "black",
                        boxShadow: 3,
                        width: "85%",
                        margin: "0 auto",
                        marginTop: "auto",
                        marginBottom: "100px",
                    }}
                    // onClick={handleLogOut}
                >
                    Sign out
                </Button>
            </Drawer>
        </Box>
    );
}

HeaderMenu.propTypes = {
    open: PropTypes.bool,
    handleDrawerOpen: PropTypes.func,
    handleDrawerClose: PropTypes.func,
    theme: PropTypes.object,
    handleInputChange: PropTypes.func,
    newArtwork: PropTypes.object,
    handleAddArtwork: PropTypes.func,
};
