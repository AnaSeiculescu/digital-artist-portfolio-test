import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

export function UpdateDeleteArtwork({ id, handleDeleteArtwork }) {
    const deleteStyle = {
        // marginTop: "30px",
    };
    return (
        <Stack direction="row" justifyContent="end" spacing={1} sx={deleteStyle}>
            <IconButton aria-label="delete" onClick={() => handleDeleteArtwork(id)} size="small">
                <DeleteIcon fontSize="small" />
            </IconButton>
        </Stack>
    );
}

UpdateDeleteArtwork.propTypes = {
    id: PropTypes.number,
    handleDeleteArtwork: PropTypes.func,
};
