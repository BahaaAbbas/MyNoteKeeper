import React, { useState } from "react";
import styles from "../pages/styles/Note.module.css";
import { Container, Typography, Box } from "@mui/material";

import SearchBar from "../components/note/SearchBar";
import Header from "../components/note/Header";
import AddNoteForm from "../components/note/AddNoteForm";
import NoteCard from "../components/note/NoteCard";
import EditNote from "../components/note/EditNote";
import { useNotes } from "../hooks/useNotes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Note = () => {
  const [editingNote, setEditingNote] = useState(null);

  const {
    notes,
    searchQuery,
    setSearchQuery,
    loading,
    error,
    addNote,
    deleteNote,
    updateNote,
  } = useNotes();

  const handleAddNote = async (note) => {
    const result = await addNote(note);
    if (result.success) {
      toast.success("Note added!");
    } else {
      toast.error(result.error?.message || "Failed to add note");
    }
  };

  const handleUpdateNote = async (id, note) => {
    const result = await updateNote(id, note);
    if (result.success) {
      toast.success("Note updated!");
    } else {
      toast.error(result.error?.message || "Failed to update note");
    }
  };

  const handleDeleteNote = async (id) => {
    const result = await deleteNote(id);
    if (result.success) {
      toast.success("Note deleted!");
    } else {
      toast.error(result.error?.message || "Failed to delete note");
    }
  };

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <Container className={styles.content}>
        {/* Header */}
        <Header />

        {/* Search Bar */}
        <Box className={styles.searchSection}>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </Box>

        {/* Add section */}
        <Box className={styles.addNoteSection}>
          <AddNoteForm onAddNote={handleAddNote} />
        </Box>

        {/* Notes card*/}
        {notes.length === 0 ? (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginTop: 4, color: "#666" }}
          >
            No notes available.
          </Typography>
        ) : (
          <Box className={styles.notesGrid}>
            {notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                onClick={() => setEditingNote(note)}
                onDelete={() => handleDeleteNote(note._id)}
              />
            ))}
          </Box>
        )}

        {/* Edit notes */}
        <EditNote
          note={editingNote}
          isOpen={!!editingNote}
          onClose={() => setEditingNote(null)}
          onSave={(id, updatedData) => handleUpdateNote(id, updatedData)}
        />
      </Container>
    </div>
  );
};

export default Note;
