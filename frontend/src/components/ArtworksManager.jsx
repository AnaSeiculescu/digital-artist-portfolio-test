import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import Box from "@mui/material/Box";
import { HeaderMenu } from "./HeaderMenu";
import { styled, useTheme } from "@mui/material/styles";

export function ArtworksManager() {
    const [artworks, setArtworks] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [newArtwork, setNewArtwork] = useState({
        title: "",
        description: "",
        image: "",
        clientlink: "",
        is_visible: true,
    });

    const readAllURL = "http://localhost:3000/artworks/all";
    // const update_delete_URL = `http://localhost:3000/artworks/${id}`;
    const createURL = "http://localhost:3000/artworks";

    useEffect(() => {
        fetch(readAllURL)
            .then((response) => response.json())
            .then((data) => {
                setArtworks(data);
                console.log("data este: ", data);
                // setLoading(false);
            })
            .catch((error) => {
                console.log("error: ", error);
                // setError(error);
                // setLoading(false);
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewArtwork({
            ...newArtwork,
            [name]: value,
        });
    };

    const addArtwork = () => {
        fetch(createURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newArtwork),
        })
            .then((response) => response.json())
            .then((data) => {
                setArtworks([...artworks, data]);
                setNewArtwork({ title: "", description: "", image: "", clientlink: "", is_visible: true });
            })
            .catch((error) => console.log("error: ", error));
    };

    // const updateArtwork = (id, updatedArtwork) => {
    //     fetch(update_delete_URL, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(updatedArtwork),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setArtworks(artworks.map((artwork) => (artwork.id === id ? data : artwork)));
    //         })
    //         .catch((error) => console.log("error: ", error));
    // };

    const deleteArtwork = (id) => {
        fetch(`http://localhost:3000/artworks/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                setArtworks(artworks.filter((artwork) => artwork.id !== id));
            })
            .catch((error) => console.log("error: ", error));
    };

    const artworksStyle = {
        width: "100%",
        position: "relative",
        marginBottom: "70px",
        display: "flex",
        justifyContent: "space-around",
    };

    const drawerWidth = 240;
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }));

    return (
        <Box sx={{ width: "100vw" }}>
            <Stack sx={{ artworksStyle }}>
                <HeaderMenu
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                    handleDrawerClose={handleDrawerClose}
                    theme={theme}
                    handleInputChange={handleInputChange}
                    newArtwork={newArtwork}
                    handleAddArtwork={addArtwork}
                >
                    <Main open={open}></Main>
                </HeaderMenu>
                <ResponsiveMasonry
                    // columnsCountBreakPoints={{ 480: 1, 768: 2, 1100: 3, 1380: 4, 1690: 5 }}
                    columnsCountBreakPoints={{ 380: 1, 550: 2, 930: 3, 1350: 4, 1750: 5 }}
                    style={{ margin: "120px 25px 25px 30px" }}
                >
                    <Masonry gutter="20px">
                        {artworks.map((artwork) => (
                            <ProjectCard
                                id={artwork.id}
                                key={artwork.id}
                                title={artwork.title}
                                description={artwork.description}
                                image={artwork.image}
                                // alt={artwork.alt}
                                clientlink={artwork.clientlink}
                                handleDeleteArtwork={deleteArtwork}
                            ></ProjectCard>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </Stack>
        </Box>
    );
}
