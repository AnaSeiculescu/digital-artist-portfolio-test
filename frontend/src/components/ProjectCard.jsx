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

export function ProjectCard({
    title,
    description,
    image,
    clientlink,
    handleDeleteArtwork,
    handleUpdateArtwork,
    id,
    inputStyle,
    labelStyle,
}) {
    const [artworkData, setArtworkData] = useState({
        title: title,
        description: description,
        image: image,
        clientlink: clientlink,
        is_visible: true,
    });

    const [editing, setEditing] = useState(false);

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

    return (
        <Card
            sx={{
                position: "relative",
                boxShadow: "4",
            }}
        >
            {editing ? (
                <Stack justifyContent="center" sx={{ paddingTop: "20px" }}>
                    <Stack>
                        <Typography fontWeight="fontWeightBold" sx={labelStyle}>
                            Title:
                        </Typography>
                        <TextField
                            id="outlined-required"
                            size="small"
                            // disabled={isLoading}
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
                            // disabled={isLoading}
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
                            // disabled={isLoading}
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
                            // disabled={isLoading}
                            name="clientlink"
                            value={artworkData.clientlink}
                            onChange={(event) => handleInputUpdate(event)}
                            sx={inputStyle}
                            multiline
                        />
                    </Stack>

                    <Button
                        variant="contained"
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
    handleDeleteArtwork: PropTypes.func,
    handleUpdateArtwork: PropTypes.func,
    id: PropTypes.number,
    theme: PropTypes.object,
    handleInputChange: PropTypes.func,
    artwork: PropTypes.object,
    inputStyle: PropTypes.object,
    labelStyle: PropTypes.object,
};
