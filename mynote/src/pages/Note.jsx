import React, { useState } from "react";
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

import { Add, Close } from "@mui/icons-material";
import SearchBar from "../components/note/SearchBar";
import Header from "../components/note/Header";
import AddNoteForm from "../components/note/AddNoteForm";
import NoteCard from "../components/note/NoteCard";
import EditNote from "../components/note/EditNote";
const Note = () => {
  const notes = [
    {
      id: "f382b095-d037-415c-be63-f0fb98116e22",
      title: "a",
      content: "a",
      createdAt: "2025-09-08T05:52:35.223Z",
      updatedAt: "2025-09-09T13:50:53.348Z",
    },
    {
      id: "2d64769b-af25-4168-abfb-27bb568a8e94",
      title: "a",
      content: "a",
      createdAt: "2025-09-08T05:52:33.327Z",
      updatedAt: "2025-09-08T05:52:33.327Z",
    },
    {
      id: "33c2240d-0231-4cfc-bb5f-96815dc1d796",
      title: "a",
      content: "a",
      createdAt: "2025-09-08T05:52:31.487Z",
      updatedAt: "2025-09-08T05:52:31.487Z",
    },
    {
      id: "895d90a6-c750-4bb1-9498-74719f4e7f9e",
      title: "a",
      content: "a",
      createdAt: "2025-09-08T05:52:29.599Z",
      updatedAt: "2025-09-08T05:52:29.599Z",
    },
    {
      id: "40f4400e-8e72-4512-aee8-430448a72124",
      title: "a",
      content: "a",
      createdAt: "2025-09-08T05:52:26.799Z",
      updatedAt: "2025-09-08T05:52:26.799Z",
    },
    {
      id: "c84f1b4d-4b1f-4ee8-a98e-e83b312ceca7",
      title: "a",
      content: "a",
      createdAt: "2025-09-08T05:52:24.968Z",
      updatedAt: "2025-09-08T05:52:24.968Z",
    },
    {
      id: "2a76e956-2140-4e73-aad8-5a23560df719",
      title: "bahaa",
      content: "bahaa",
      createdAt: "2025-09-08T05:25:10.814Z",
      updatedAt: "2025-09-08T05:25:10.814Z",
    },
    {
      id: "be4d8fb0-bd9e-4b85-9ca7-55f389317666",
      title: "bah",
      content: "bah",
      createdAt: "2025-09-08T05:25:00.879Z",
      updatedAt: "2025-09-08T05:25:00.879Z",
    },
    {
      id: "a9e38c8e-6707-4ecd-b024-d70be59d6de8",
      title: "bahaa",
      content: "addedbahaa",
      createdAt: "2025-09-08T05:24:47.647Z",
      updatedAt: "2025-09-08T05:26:15.366Z",
    },
  ];
  const [editingNote, setEditingNote] = useState(null);

  return (
    <div className={styles.container}>
      <Container className={styles.content}>
        {/* Header */}
        <Header />

        {/* Search Bar */}
        <Box className={styles.searchSection}>
          <SearchBar />
        </Box>

        {/* Add section */}
        <Box className={styles.addNoteSection}>
          <AddNoteForm />
        </Box>

        {/* Notes card*/}
        <Box className={styles.notesGrid}>
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onClick={() => setEditingNote(note)}
            />
          ))}
        </Box>

        {/* Edit notes */}
        <EditNote
          note={editingNote}
          isOpen={!!editingNote}
          onClose={() => setEditingNote(null)}
        />
      </Container>
    </div>
  );
};

export default Note;
