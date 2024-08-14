import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ToggleButton from "@mui/material/ToggleButton";
import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function UpdateDeleteArtwork({
    id,
    handleDeleteArtwork,
    editing,
    handleEditArtworkBtn,
    toggleVisibility,
    isVisible,
}) {
    return (
        <Stack direction="row" justifyContent="end">
            <Checkbox
                icon={<VisibilityIcon />}
                checkedIcon={<VisibilityOffIcon />}
                checked={!isVisible}
                onChange={toggleVisibility}
            />
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
            <IconButton aria-label="delete" onClick={() => handleDeleteArtwork(id)} size="small">
                <DeleteIcon fontSize="small" />
            </IconButton>
        </Stack>
    );
}

UpdateDeleteArtwork.propTypes = {
    id: PropTypes.number,
    handleDeleteArtwork: PropTypes.func,
    editing: PropTypes.bool,
    handleEditArtworkBtn: PropTypes.func,
    toggleVisibility: PropTypes.func,
    isVisible: PropTypes.bool,
};
