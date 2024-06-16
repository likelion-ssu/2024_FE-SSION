import { useState, useEffect } from "react";

export interface NoteType {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  bookmarked: boolean;
  date: string;
}

export const useNotes = () => {
  const [notes, setNotes] = useState<{ [date: string]: NoteType[] }>({});
  const [sortOption, setSortOption] = useState("recentlyCreated");

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      const parsedNotes = JSON.parse(storedNotes) as {
        [date: string]: NoteType[];
      };
      for (const date in parsedNotes) {
        parsedNotes[date] = parsedNotes[date].map((note) => ({
          ...note,
          createdAt: new Date(note.createdAt),
          updatedAt: new Date(note.updatedAt),
        }));
      }
      setNotes(parsedNotes);
    }
  }, []);

  const saveNotesToLocalStorage = (notes: { [date: string]: NoteType[] }) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const addNote = (note: NoteType) => {
    const newNotes = {
      ...notes,
      [note.date]: [...(notes[note.date] || []), note],
    };
    setNotes(newNotes);
    saveNotesToLocalStorage(newNotes);
  };

  const editNote = (
    date: string,
    id: string,
    newTitle: string,
    newContent: string
  ) => {
    const updatedNotes = {
      ...notes,
      [date]: notes[date].map((note) =>
        note.id === id
          ? {
              ...note,
              title: newTitle,
              content: newContent,
              updatedAt: new Date(),
            }
          : note
      ),
    };
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const deleteNote = (date: string, id: string) => {
    const updatedNotes = {
      ...notes,
      [date]: notes[date].filter((note) => note.id !== id),
    };
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const toggleBookmark = (date: string, id: string) => {
    const updatedNotes = {
      ...notes,
      [date]: notes[date].map((note) =>
        note.id === id ? { ...note, bookmarked: !note.bookmarked } : note
      ),
    };
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const getSortedNotes = (date: string) => {
    if (!notes[date]) return [];
    const notesForDate = notes[date];
    if (sortOption === "bookmarked") {
      return notesForDate.filter((note) => note.bookmarked);
    }
    return notesForDate.sort((a, b) => {
      if (sortOption === "recentlyCreated") {
        return b.createdAt.getTime() - a.createdAt.getTime();
      } else if (sortOption === "recentlyUpdated") {
        return b.updatedAt.getTime() - a.updatedAt.getTime();
      }
      return 0;
    });
  };

  const handleSortChange = (sortOption: string) => {
    setSortOption(sortOption);
  };

  return {
    getSortedNotes,
    addNote,
    editNote,
    deleteNote,
    toggleBookmark,
    handleSortChange,
  };
};
