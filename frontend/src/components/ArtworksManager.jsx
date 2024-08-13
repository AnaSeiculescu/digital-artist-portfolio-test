import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import Box from "@mui/material/Box";
import { HeaderMenu } from "./HeaderMenu";

export function ArtworksManager() {
    const [artworks, setArtworks] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [newArtwork, setNewArtwork] = useState({
        title: "",
        description: "",
        image: "",
        clientlink: "",
        isVisible: true,
    });

    const readAllURL = "http://localhost:3000/artworks/all";
    const update_delete_URL = "http://localhost:3000/artworks/${id}";
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
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
                setNewArtwork({ title: "", description: "", image: "", clientlink: "", isVisible: true });
            })
            .catch((error) => console.log("error: ", error));
    };

    const updateArtwork = (id, updatedArtwork) => {
        fetch(update_delete_URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedArtwork),
        })
            .then((response) => response.json())
            .then((data) => {
                setArtworks(artworks.map((artwork) => (artwork.id === id ? data : artwork)));
            })
            .catch((error) => console.log("error: ", error));
    };

    const deleteArtwork = (id) => {
        fetch(update_delete_URL, {
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

    return (
        <Box sx={{ width: "100vw" }}>
            <Stack sx={{ artworksStyle }}>
                <HeaderMenu />
                <ResponsiveMasonry
                    // columnsCountBreakPoints={{ 480: 1, 768: 2, 1100: 3, 1380: 4, 1690: 5 }}
                    columnsCountBreakPoints={{ 380: 1, 550: 2, 930: 3, 1350: 4, 1750: 5 }}
                    style={{ margin: "25px 25px 25px 30px" }}
                >
                    <Masonry gutter="20px">
                        {artworks.map((artwork) => (
                            <ProjectCard
                                key={artwork.id}
                                title={artwork.title}
                                description={artwork.description}
                                image={artwork.image}
                                // alt={artwork.alt}
                                clientlink={artwork.clientlink}
                            ></ProjectCard>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </Stack>
        </Box>
    );
}
