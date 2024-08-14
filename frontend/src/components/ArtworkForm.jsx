import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export function ArtworkForm({ newArtwork, handleInputChange, inputStyle, labelStyle }) {
    return (
        <Stack>
            <Stack>
                <Typography fontWeight="fontWeightBold" sx={labelStyle}>
                    Title:
                </Typography>
                <TextField
                    id="outlined-required"
                    size="small"
                    // disabled={isLoading}
                    name="title"
                    value={newArtwork.title}
                    onChange={(event) => handleInputChange(event)}
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
                    value={newArtwork.description}
                    onChange={(event) => handleInputChange(event)}
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
                    value={newArtwork.image}
                    onChange={(event) => handleInputChange(event)}
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
                    value={newArtwork.clientlink}
                    onChange={(event) => handleInputChange(event)}
                    sx={inputStyle}
                    multiline
                />
            </Stack>
        </Stack>
    );
}

ArtworkForm.propTypes = {
    inputStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    handleInputChange: PropTypes.func,
    newArtwork: PropTypes.object,
    artwork: PropTypes.object,
    handleAddArtwork: PropTypes.func,
    theme: PropTypes.object,
};
