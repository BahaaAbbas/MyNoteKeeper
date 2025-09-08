import React from "react";
import style from "../styles/Note.module.css";
import { Box, TextField, Typography } from "@mui/material";
const Note = () => {
  return (
    <Box className={style.note} textAlign="center">
      <Typography variant="h5" className={style.title}>
        Organize your thoughts and ideas
      </Typography>

      <TextField
        className={style.search}
        type="search"
        name="search"
        placeholder="Search notes..."
        variant="outlined"
      />
    </Box>
  );
};

export default Note;
