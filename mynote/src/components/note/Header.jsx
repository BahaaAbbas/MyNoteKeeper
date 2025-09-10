import React from "react";
import { MenuBook } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
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
  );
};

export default Header;
