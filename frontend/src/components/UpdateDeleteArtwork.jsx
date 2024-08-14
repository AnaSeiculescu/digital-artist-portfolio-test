import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ToggleButton from "@mui/material/ToggleButton";

export function UpdateDeleteArtwork({ id, handleDeleteArtwork, editing, handleEditArtworkBtn }) {
    return (
        <Stack direction="row" justifyContent="end">
            <IconButton aria-label="delete" onClick={() => handleDeleteArtwork(id)} size="small">
                <DeleteIcon fontSize="small" />
            </IconButton>
            <ToggleButton
                value="editing"
                size="small"
                selected={editing}
                onChange={() => {
                    handleEditArtworkBtn();
                }}
                style={{
                    border: "none",
                }}
            >
                <ModeEditIcon fontSize="small" />
            </ToggleButton>
        </Stack>
    );
}

UpdateDeleteArtwork.propTypes = {
    id: PropTypes.number,
    handleDeleteArtwork: PropTypes.func,
    editing: PropTypes.bool,
    handleEditArtworkBtn: PropTypes.func,
};
