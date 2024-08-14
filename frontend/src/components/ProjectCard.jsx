import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { UpdateDeleteArtwork } from "./UpdateDeleteArtwork";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export function ProjectCard({
    title,
    description,
    image,
    clientlink,
    is_visible,
    handleDeleteArtwork,
    handleUpdateArtwork,
    isLoadingUpdate,
    id,
    inputStyle,
    labelStyle,
}) {
    const [artworkData, setArtworkData] = useState({
        id: id,
        title: title,
        description: description,
        image: image,
        clientlink: clientlink,
        is_visible: is_visible,
    });

    const [editing, setEditing] = useState(false);
    const [isVisible, setIsVisible] = useState(artworkData.is_visible);

    const handleEditArtworkBtn = () => {
        setEditing(!editing);
    };

    const handleInputUpdate = (event) => {
        const { name, value } = event.target;
        setArtworkData({
            ...artworkData,
            [name]: value,
        });
    };

    const handleSaveUpdate = async () => {
        await handleUpdateArtwork(id, artworkData);
        setEditing(false);
    };

    const artworkStyle = {
        position: "relative",
        boxShadow: "4",
        opacity: isVisible ? 1 : 0.55,
        transition: "opacity 0.3s ease",
    };

    const toggleVisibility = () => {
        const updatedVisibility = !isVisible;
        setIsVisible(updatedVisibility);
        // if (!isVisible) {
        //     artworkStyle.opacity = "0.6";
        // }

        if (updatedVisibility !== undefined && artworkData.id) {
            fetch(`http://localhost:3000/artworks/${artworkData.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ is_visible: updatedVisibility }),
            })
                .then((response) => response.json())
                .then((updatedArtworkVisibility) => {
                    console.log("visibility updated: ", updatedArtworkVisibility);
                })
                .catch((error) => console.log("error: ", error));
        } else {
            console.log("Invalid visibility value or artwork ID:", updatedVisibility, artworkData.id);
        }
    };

    return (
        <Card sx={artworkStyle}>
            {editing ? (
                <Stack justifyContent="center" sx={{ paddingTop: "20px" }}>
                    <Stack>
                        <Typography fontWeight="fontWeightBold" sx={labelStyle}>
                            Title:
                        </Typography>
                        <TextField
                            id="outlined-required"
                            size="small"
                            name="title"
                            value={artworkData.title}
                            onChange={(event) => handleInputUpdate(event)}
                            sx={inputStyle}
                        />
                    </Stack>

                    <Stack>
                        <Typography fontWeight="fontWeightBold" sx={labelStyle}>
                            Description:
                        </Typography>
                        <TextField
                            id="standard-multiline-static"
                            size="small"
                            name="description"
                            value={artworkData.description}
                            onChange={(event) => handleInputUpdate(event)}
                            sx={inputStyle}
                            multiline
                        />
                    </Stack>

                    <Stack>
                        <Typography fontWeight="fontWeightBold" sx={labelStyle}>
                            Image:
                        </Typography>
                        <TextField
                            id="outlined-required"
                            size="small"
                            name="image"
                            value={artworkData.image}
                            onChange={(event) => handleInputUpdate(event)}
                            sx={inputStyle}
                        />
                    </Stack>

                    <Stack>
                        <Typography fontWeight="fontWeightBold" sx={labelStyle}>
                            Client site link:
                        </Typography>
                        <TextField
                            id="outlined-required"
                            size="small"
                            name="clientlink"
                            value={artworkData.clientlink}
                            onChange={(event) => handleInputUpdate(event)}
                            sx={inputStyle}
                            multiline
                        />
                    </Stack>

                    <Button
                        variant="contained"
                        disabled={isLoadingUpdate}
                        sx={{
                            bgcolor: "black",
                            color: "white",
                            boxShadow: 3,
                            width: "55%",
                            margin: "0 auto",
                            marginBottom: "20px",
                            alignSelf: "center",
                        }}
                        onClick={handleSaveUpdate}
                    >
                        {isLoadingUpdate && <CircularProgress size={25} sx={{ marginRight: "7px" }} />}
                        Save
                    </Button>
                </Stack>
            ) : (
                <>
                    <CardMedia
                        component="img"
                        height="220"
                        image={image}
                        sx={{
                            boxShadow: "1",
                        }}
                    />

                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: "1",
                            justifyContent: "space-between",
                        }}
                    >
                        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                            <Typography sx={{ color: "black", fontSize: "16px", fontWeight: "800" }}>
                                {title}
                            </Typography>

                            <Link
                                href={clientlink}
                                underline="none"
                                target="blank"
                                sx={{ cursor: "pointer", fontWeight: "700" }}
                            >
                                <Chip label="visit the site" variant="filled" size="small" />
                            </Link>
                        </Stack>
                        <Divider></Divider>
                        <Typography sx={{ color: "black", fontSize: "14px", marginTop: "25px" }}>
                            {description}
                        </Typography>
                    </CardContent>
                    <UpdateDeleteArtwork
                        id={id}
                        handleDeleteArtwork={handleDeleteArtwork}
                        editing={editing}
                        handleEditArtworkBtn={handleEditArtworkBtn}
                        toggleVisibility={toggleVisibility}
                        isVisible={isVisible}
                    />
                </>
            )}
        </Card>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    clientlink: PropTypes.string,
    is_visible: PropTypes.bool,
    handleDeleteArtwork: PropTypes.func,
    handleUpdateArtwork: PropTypes.func,
    id: PropTypes.number,
    theme: PropTypes.object,
    handleInputChange: PropTypes.func,
    artwork: PropTypes.object,
    inputStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    isLoadingUpdate: PropTypes.bool,
};
