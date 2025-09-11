import { Add, Close } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/AddNoteForm.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNoteForm = ({ onAddNote }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setIsExpanded(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content cannot be empty!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    onAddNote({ title, content });

    setTitle("");
    setContent("");
    setIsExpanded(false);
  };

  if (!isExpanded) {
    return (
      <Card
        className={styles.addCard}
        onClick={() => setIsExpanded(true)}
        elevation={2}
      >
        <CardContent className={styles.addContent}>
          <Add />
          <Typography variant="body1">Add a new note...</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={styles.expandedCard} elevation={3}>
      <CardContent>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            placeholder="Note title..."
            variant="standard"
            fullWidth
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.titleInput}
            InputProps={{
              disableUnderline: true,
              sx: {
                fontSize: "1.1rem",
                fontWeight: 500,
                "&::placeholder": {
                  color: "#666",
                },
              },
            }}
          />
          <TextField
            placeholder="Write your note here..."
            variant="standard"
            fullWidth
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.contentTextarea}
            InputProps={{
              disableUnderline: true,
              sx: {
                "&::placeholder": {
                  color: "#666",
                },
              },
            }}
          />
          <Box className={styles.actions}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "&:hover": {
                  opacity: 0.9,
                },
              }}
            >
              Save Note
            </Button>
            <Button
              type="button"
              variant="text"
              onClick={handleCancel}
              startIcon={<Close />}
              sx={{ color: "#666" }}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddNoteForm;
