import React from "react";
import styles from "../pages/styles/Note.module.css";
import {
  Container,
  Typography,
  Box,
  Grid,
  Snackbar,
  Alert,
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { Add, Close } from "@mui/icons-material";
const Note = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.content}>
        {/* Header */}
        <Box className={styles.header}>
          <Box className={styles.headerIcon}>
            <Box className={styles.iconContainer}>
              <MenuBook sx={{ color: "white", fontSize: 32 }} />
            </Box>
            <Typography variant="h2" className={styles.title}>
              My Notes
            </Typography>
          </Box>
          <Typography variant="h6" className={styles.subtitle}>
            Organize your thoughts and ideas
          </Typography>
        </Box>

        <Box className={styles.searchSection}>
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
        </Box>

        <Box className={styles.addNoteSection}>
          <Card className={styles.addCard} elevation={4}>
            <CardContent className={styles.addContent}>
              <Add />
              <Typography variant="body1">Add a new note...</Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default Note;
