import React from "react";
import styles from "../styles/SearchBar.module.css";
import { Search } from "@mui/icons-material";
import { TextField, InputAdornment, Box } from "@mui/material";

const SearchBar = () => {
  return (
    <Box className={styles.searchContainer}>
      <TextField
        fullWidth
        placeholder="Search notes..."
        variant="outlined"
        size="medium"
        className={styles.searchInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#667eea",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#667eea",
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
