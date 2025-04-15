import React, { useContext, useState } from "react";
import notesContext from "../context/notes/NotesContext";
import NoteItem from "./NoteItem";
import AddANote from "./AddANote";
import NotesList from "./NotesList";

function Notes(props) {
  const context = useContext(notesContext);
  const {showAlert} = props;
  // const [notes, addNote, editNote, deleteNote] = useState(context.notes || []);
  return (
    <>
      <AddANote showAlert={showAlert}/>
      <div className="row my-3">
        <h1>Your Notes</h1>
        <NotesList showAlert={showAlert}/>
      </div>
    </>
  );
}

export default Notes;
