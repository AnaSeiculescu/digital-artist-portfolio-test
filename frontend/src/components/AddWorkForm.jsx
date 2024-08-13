import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

export function AddWorkForm({ theme, handleInputChange, newArtwork, handleAddArtwork }) {
    const inputsStyle = {
        marginBottom: "21px",
        padding: theme.spacing(0, 1),
    };
    const labelsStyle = {
        margin: "0 50px 0 7px",
        fontSize: "14px",
        padding: theme.spacing(0, 4),
    };
    return (
        <Stack>
            <Typography variant="subtitle2" sx={{ margin: "25px 0", padding: theme.spacing(1, 3), fontWeight: "600" }}>
                Add an art work to your collection:
            </Typography>
            <Stack>
                <Typography fontWeight="fontWeightBold" sx={labelsStyle}>
                    Title:
                </Typography>
                <TextField
                    id="outlined-required"
                    size="small"
                    // disabled={isLoading}
                    name="title"
                    value={newArtwork.title}
                    onChange={(event) => handleInputChange(event)}
                    sx={inputsStyle}
                />
            </Stack>

            <Stack>
                <Typography fontWeight="fontWeightBold" sx={labelsStyle}>
                    Description:
                </Typography>
                <TextField
                    id="standard-multiline-static"
                    size="small"
                    // disabled={isLoading}
                    name="description"
                    value={newArtwork.description}
                    onChange={(event) => handleInputChange(event)}
                    sx={inputsStyle}
                    multiline
                />
            </Stack>

            <Stack>
                <Typography fontWeight="fontWeightBold" sx={labelsStyle}>
                    Image:
                </Typography>
                <TextField
                    id="outlined-required"
                    size="small"
                    // disabled={isLoading}
                    name="image"
                    value={newArtwork.image}
                    onChange={(event) => handleInputChange(event)}
                    sx={inputsStyle}
                />
            </Stack>

            <Stack>
                <Typography fontWeight="fontWeightBold" sx={labelsStyle}>
                    Client site link:
                </Typography>
                <TextField
                    id="outlined-required"
                    size="small"
                    // disabled={isLoading}
                    name="clientlink"
                    value={newArtwork.clientlink}
                    onChange={(event) => handleInputChange(event)}
                    sx={inputsStyle}
                    multiline
                />
            </Stack>
            <Button
                variant="contained"
                // disabled={isLoading}
                sx={{
                    bgcolor: "black",
                    color: "white",
                    boxShadow: 3,
                    width: "85%",
                    margin: "0 auto",
                    marginTop: "auto",
                    marginBottom: "100px",
                }}
                onClick={handleAddArtwork}
            >
                Add work
            </Button>
        </Stack>
    );
}

AddWorkForm.propTypes = {
    theme: PropTypes.object,
    handleInputChange: PropTypes.func,
    newArtwork: PropTypes.object,
    handleAddArtwork: PropTypes.func,
};
