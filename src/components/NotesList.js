import React, { useContext } from "react";
import NotesContext from "../context/notes/NotesContext";
import NoteItem from "./NoteItem";

const NotesList = (props) => {
  const { notes } = useContext(NotesContext);
  console.log(notes);

  return (
    <div className="row">
      {notes.length > 0 ? (
        notes.map((note) => <NoteItem key={note._id} ele={note} />)
      ) : (
        <p>No notes available</p>
      )}
    </div>
  );
};

export default NotesList;
