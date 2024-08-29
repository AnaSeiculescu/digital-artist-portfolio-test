import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "@mui/material";

export function ArtworkForm({ newArtwork, handleInputChange, inputStyle, labelStyle }) {
    const [files, setFiles] = useState(null);
    const [msg, setMsg] = useState(null);

    function handleUpload() {
        if (!files) {
            setMsg("No file selected!");
            return;
        }

        const fd = new FormData();
        fd.append("file", files);

        setMsg("Uploading...");
    }
    return (
        <Stack>
            <Stack>
                <Typography fontWeight="fontWeightBold" sx={labelStyle}>
                    Title:
                </Typography>
                <TextField
                    id="outlined-required"
                    size="small"
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
                    name="description"
                    value={newArtwork.description}
                    onChange={(event) => handleInputChange(event)}
                    sx={inputStyle}
                    multiline
                />
            </Stack>

            <Stack sx={{ marginBottom: "20px", textAlign: "center" }}>
                <Typography fontWeight="fontWeightBold" sx={labelStyle}>
                    Image:
                </Typography>
                <TextField
                    id="outlined-required"
                    size="small"
                    name="image"
                    value={newArtwork.image}
                    // onChange={(event) => handleInputChange(event)}
                    onChange={(event) => setFiles(event.target.files)}
                    type="file"
                    sx={inputStyle}
                    multiple
                />
                {msg && <span>{msg}</span>}
                <Button
                    variant="outlined"
                    // disabled={isLoadingAdd}
                    sx={{
                        // bgcolor: "black",
                        color: "black",
                        boxShadow: 3,
                        width: "70%",
                        margin: "0 auto",
                        marginTop: "auto",
                        marginBottom: "10px",
                    }}
                    onClick={handleUpload}
                >
                    {/* {isLoadingAdd && <CircularProgress size={25} sx={{ marginRight: "7px" }} />} */}
                    Upload
                </Button>
            </Stack>

            <Stack>
                <Typography fontWeight="fontWeightBold" sx={labelStyle}>
                    Client site link:
                </Typography>
                <TextField
                    id="outlined-required"
                    size="small"
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
