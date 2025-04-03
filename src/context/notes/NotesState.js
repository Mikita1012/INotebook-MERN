import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Add this import for generating unique IDs

import NotesContext from "./NotesContext";

const NotesState = (props) => {
  const initialNotes = [
    {
      _id: "67e28a3781b930f502wecb37",
      user: "67e1430de78f21084478573d",
      title: "My first note",
      description: "Wake up early",
      tag: "personal",
      date: "2025-03-25T10:46:59.961Z",
      __v: 0,
    },
    {
      _id: "67e289a3781qb930f502ecb3",
      user: "67e1430de78f21084478573d",
      title: "My first note",
      description: "Wake up early",
      tag: "personal",
      date: "2025-03-25T10:46:59.961Z",
      __v: 0,
    },
    {
      _id: "7e289a3781sb930f502ecb37",
      user: "67e1430de78f21084478573d",
      title: "My first note",
      description: "Wake up early",
      tag: "personal",
      date: "2025-03-25T10:46:59.961Z",
      __v: 0,
    },
    {
      _id: "67e289a378b930f502ecb37",
      user: "67e1430de78f21084478573d",
      title: "My first note",
      description: "Wake up early",
      tag: "personal",
      date: "2025-03-25T10:46:59.961Z",
      __v: 0,
    },
    {
      _id: "67e289a37c81b930f502ec37",
      user: "67e1430de78f21084478573d",
      title: "My first note",
      description: "Wake up early",
      tag: "personal",
      date: "2025-03-25T10:46:59.961Z",
      __v: 0,
    },
    {
      _id: "67e8a2ae781b930f502ecb3a",
      user: "67e1430de78f21084478573d",
      title: "My Second Note Updated",
      description: "Hello from second note - updated",
      tag: "personal",
      date: "2025-03-25T10:49:18.941Z",
      __v: 0,
    },

    {
      _id: "67e28a2ce81b930f502ecb3a",
      user: "67e1430de78f21084478573d",
      title: "My Second Note Updated",
      description: "Hello from second note - updated",
      tag: "personal",
      date: "2025-03-25T10:49:18.941Z",
      __v: 0,
    },
    {
      _id: "67e28za2e781b30f502ecb3a",
      user: "67e1430de78f21084478573d",
      title: "My Second Note Updated",
      description: "Hello from second note - updated",
      tag: "personal",
      date: "2025-03-25T10:49:18.941Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(Array.isArray(initialNotes) ? initialNotes : []);

  const addNote = (title, description, tag) => {
    // ṬODO: ADD API CALL 
    
    const note = {
      _id:  uuidv4(),// Generate a unique ID
      user: "67e1430de78f21084478573d",
      title,
      description,
      tag,
      date: new Date().toISOString(),
      __v: 0,
    };
    setNotes(notes.concat(note));
    console.log("Notes after addNote: ", notes);
    
  };
  const deleteNote = (id) => {
    // ṬODO: ADD API CALL
    console.log("note deleted " + id);
    const newNotes = notes.filter((notes) => {return notes._id != id})
    setNotes(newNotes);
    
  };
  const editNote = (id, title, description, tag) => {

  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
