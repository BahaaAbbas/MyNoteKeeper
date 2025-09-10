import React, { useEffect, useState } from "react";
import styles from "../styles/EditNote.module.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditNote = ({ note, isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleCancel = () => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
    onClose();
  };
  const handleSave = () => {
    toast.success("Saved successfully! ", {
      position: "top-right",
      autoClose: 2000,
    });
    onClose();
  };
  if (!note) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        className: styles.dialog,
      }}
    >
      <DialogTitle sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
        Edit Note
      </DialogTitle>

      <DialogContent>
        <Box className={styles.form}>
          <TextField
            placeholder="Note title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            fullWidth
            className={styles.titleInput}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "1.2rem",
                fontWeight: 500,
              },
            }}
          />

          <TextField
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            variant="outlined"
            fullWidth
            multiline
            rows={12}
            className={styles.contentTextarea}
          />

          <Typography variant="caption" className={styles.dateInfo}>
            Created:{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date(note.createdAt))}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions className={styles.actions}>
        <Button onClick={handleCancel} sx={{ color: "#666" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditNote;
