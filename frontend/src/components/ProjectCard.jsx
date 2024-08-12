import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export function ProjectCard({ title, description, image, clientlink }) {
    return (
        <Stack>
            <Card sx={{ boxShadow: "4" }}>
                <CardMedia
                    component="img"
                    height="165"
                    image={image}
                    // alt={alt}
                    sx={{
                        boxShadow: "1",
                        width: "330px",
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
                            <Chip label="clientLink" variant="filled" size="small" />
                        </Link>
                    </Stack>
                    <Divider></Divider>
                    <Typography sx={{ color: "black", fontSize: "14px" }}>{description}</Typography>
                </CardContent>
            </Card>
        </Stack>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    // alt: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    clientlink: PropTypes.string,
};
