import React, { useContext, useState } from "react";
import notesContext from "../context/notes/NotesContext";
import NoteItem from "./NoteItem";

function Notes() {
  const context = useContext(notesContext);
  const [notes, setNotes] = useState(context.notes || []);
  return (
    <>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((ele) => {
          return <NoteItem key={ele._id} ele={ele}/>
        })}
      </div>
    </>
  );
}

export default Notes;
