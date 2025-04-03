import React, { useContext, useState } from "react";
import notesContext from "../context/notes/NotesContext";
import NoteItem from "./NoteItem";
import AddANote from "./AddANote";
import NotesList from "./NotesList";

function Notes() {
  const context = useContext(notesContext);
  // const [notes, addNote, editNote, deleteNote] = useState(context.notes || []);
  return (
    <>
      <AddANote />
      <div className="row my-3">
        <h1>Your Notes</h1>
        <NotesList/>
      </div>
    </>
  );
}

export default Notes;
