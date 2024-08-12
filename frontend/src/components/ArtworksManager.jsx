import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import Box from "@mui/material/Box";

export function ArtworksManager() {
    const [artworks, setArtworks] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [newArtwork, setNewArtwork] = useState({
    //     title: "",
    //     description: "",
    //     image: "",
    //     clientlink: "",
    //     isVisible: true,
    // });

    const readAllURL = "http://localhost:3000/artworks/all";

    useEffect(() => {
        fetch(readAllURL)
            .then((response) => response.json())
            .then((data) => {
                setArtworks(data);
                console.log("data este: ", data);
                // setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                // setError(error);
                // setLoading(false);
            });
    }, []);

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
                {/* <Stack sx={{ width: "100%", height: "300px", border: "3px solid red" }}></Stack> */}
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 480: 1, 768: 2, 1024: 3, 1300: 4 }}
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
