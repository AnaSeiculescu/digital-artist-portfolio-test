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
// import Box from "@mui/material/Box";

export function ProjectCard({ title, description, image, clientlink, handleDeleteArtwork, id }) {
    return (
        <Card
            sx={{
                position: "relative",
                boxShadow: "4",
                // width: "330px"
            }}
        >
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
                    // height: "100%",
                    justifyContent: "space-between",
                }}
            >
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography sx={{ color: "black", fontSize: "16px", fontWeight: "800" }}>{title}</Typography>

                    <Link
                        href={clientlink}
                        underline="none"
                        target="blank"
                        sx={{ cursor: "pointer", fontWeight: "700" }}
                    >
                        <Chip label="visit the site" variant="filled" size="small" />
                    </Link>
                    {/* <DeleteArtwork id={id} handleDeleteArtwork={handleDeleteArtwork} /> */}
                </Stack>
                <Divider></Divider>
                <Typography sx={{ color: "black", fontSize: "14px", marginTop: "25px" }}>{description}</Typography>
            </CardContent>
            <UpdateDeleteArtwork id={id} handleDeleteArtwork={handleDeleteArtwork} />
        </Card>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    clientlink: PropTypes.string,
    handleDeleteArtwork: PropTypes.func,
    id: PropTypes.number,
};
