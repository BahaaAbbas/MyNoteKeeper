import React, { useState } from "react";
import styles from "../styles/NoteCard.module.css";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoteCard = ({ note, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));

  const truncateContent = (content, maxLength = 150) =>
    content.length <= maxLength ? content : content.slice(0, maxLength) + "...";

  const handleDelete = (e) => {
    e.stopPropagation();

    toast(
      ({ closeToast }) => (
        <div style={{ padding: "10px", textAlign: "center" }}>
          <p style={{ marginBottom: "12px", fontWeight: "500" }}>
            Are you sure you want to delete this?
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <button
              style={{
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => {
                toast.error("Deleted successfully ", { autoClose: 2000 });
                closeToast();
              }}
            >
              Yes
            </button>
            <button
              style={{
                backgroundColor: "#bdc3c7",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={closeToast}
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
      }
    );
  };
  return (
    <Card
      className={styles.noteCard}
      onClick={onClick}
      elevation={isHovered ? 6 : 2}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className={styles.cardContent}>
        <div className={styles.textArea}>
          <Typography variant="h6" className={styles.noteTitle}>
            {note.title || "Untitled"}
          </Typography>

          {note.content && (
            <Typography variant="body2" className={styles.noteContent}>
              {truncateContent(note.content)}
            </Typography>
          )}

          <Typography variant="caption" className={styles.noteDate}>
            {formatDate(note.updatedAt)}
          </Typography>
        </div>

        <IconButton
          className={styles.deleteButton}
          size="small"
          onClick={(e) => handleDelete(e)}
        >
          <Delete fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
