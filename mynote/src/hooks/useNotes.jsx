import { useEffect, useState } from "react";

export function useNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // notes
  useEffect(() => {
    let ignore = false;

    async function fetchNotes() {
      try {
        setLoading(true);
        const res = await fetch("/api/all");
        if (!res.ok) throw new Error("Failed to fetch notes");
        const data = await res.json();

        if (!ignore) setNotes(data || []);
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchNotes();
    return () => {
      ignore = true;
    };
  }, []);

  // Create
  async function addNote(note) {
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
      if (!res.ok) throw new Error("Failed to create note");
      const data = await res.json();
      setNotes((prev) => [data.note, ...prev]);
      return { success: true };
    } catch (err) {
      setError(err);
      return { success: false, error: err };
    }
  }

  // Update
  async function updateNote(id, updates) {
    try {
      const res = await fetch(`/api/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error("Failed to update note");
      const data = await res.json();
      setNotes((prev) => prev.map((n) => (n._id === id ? data.note : n)));

      return { success: true };
    } catch (err) {
      setError(err);
      return { success: false, error: err };
    }
  }

  // Delete
  async function deleteNote(id) {
    try {
      const res = await fetch(`/api/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete note");
      await res.json();
      setNotes((prev) => prev.filter((n) => n._id !== id));
      return { success: true };
    } catch (err) {
      setError(err);
      return { success: false, error: err };
    }
  }

  const filteredNotes = notes.filter((note) => {
    const title = note.title?.toLowerCase() || "";
    const content = note.content?.toLowerCase() || "";
    const query = searchQuery.toLowerCase();
    return title.includes(query) || content.includes(query);
  });

  return {
    notes: filteredNotes,
    searchQuery,
    setSearchQuery,
    loading,
    error,
    addNote,
    updateNote,
    deleteNote,
  };
}
