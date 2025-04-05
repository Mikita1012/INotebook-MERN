import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Add this import for generating unique IDs

import NotesContext from "./NotesContext";

const NotesState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [notes, setNotes] = useState(
    Array.isArray(initialNotes) ? initialNotes : []
  );

  const addNote = async (title, description, tag) => {
    // ṬODO: ADD API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdlM2Q2N2RmOTIyMjUxYTJmN2Y4NTFlIn0sImlhdCI6MTc0Mjk4NDgyOX0.lccjbNEGMqoBIa1w5-Yd8X4-XXgDa-VInUi2xsCHEaU",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    if (!response.ok) {
      console.error("Failed to add note:", await response.text());
      return;
    }

    const json = await response.json();
    const note = {
      _id: uuidv4(), // Generate a unique ID
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

  
  const getNotes = async () => {
    // Get All Notes api call
     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdlM2Q2N2RmOTIyMjUxYTJmN2Y4NTFlIn0sImlhdCI6MTc0Mjk4NDgyOX0.lccjbNEGMqoBIa1w5-Yd8X4-XXgDa-VInUi2xsCHEaU",
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  const deleteNote = (id) => {
    // ṬODO: DELETE NOTE API CALL
    console.log("note deleted " + id);
    const newNotes = notes.filter((notes) => {
      return notes._id != id;
    });
    setNotes(newNotes);
  };
  const editNote = async (id, title, description, tag) => {
    // API CALL
    // const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "auth-token":
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdlM2Q2N2RmOTIyMjUxYTJmN2Y4NTFlIn0sImlhdCI6MTc0Mjk4NDgyOX0.lccjbNEGMqoBIa1w5-Yd8X4-XXgDa-VInUi2xsCHEaU",
    //   },
    //   body: JSON.stringify({title, description, tag}),
    // });

    // const json = response.json();

    // for (let index = 0; index < notes.length; index++) {
    //   const element = notes[index];
    //   if (element._id === id) {
    //     element.title = title;
    //     element.description = description;
    //     element.tag = tag;
    //   }
    // }
    console.log("edit note func");
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NotesContext.Provider>
  );
};
export default NotesState;
