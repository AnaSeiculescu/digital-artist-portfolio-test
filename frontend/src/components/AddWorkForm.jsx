import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { ArtworkForm } from "./ArtworkForm";

export function AddWorkForm({ theme, handleInputChange, newArtwork, handleAddArtwork, inputStyle, labelStyle }) {
    return (
        <Stack>
            <Typography variant="subtitle2" sx={{ margin: "25px 0", padding: theme.spacing(1, 3), fontWeight: "600" }}>
                Add an art work to your collection:
            </Typography>
            <ArtworkForm
                newArtwork={newArtwork}
                handleInputChange={handleInputChange}
                theme={theme}
                inputStyle={inputStyle}
                labelStyle={labelStyle}
            />
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
    inputStyle: PropTypes.object,
    labelStyle: PropTypes.object,
};
