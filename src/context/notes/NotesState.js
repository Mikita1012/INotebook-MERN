import { useState } from "react";

import NotesContext from "./NotesContext";

const NotesState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [notes, setNotes] = useState(
    Array.isArray(initialNotes) ? initialNotes : []
  );

  const addNote = async (title, description, tag) => {
    // API call to add a new note
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdlM2Q2N2RmOTIyMjUxYTJmN2Y4NTFlIn0sImlhdCI6MTc0Mjk4NDgyOX0.lccjbNEGMqoBIa1w5-Yd8X4-XXgDa-VInUi2xsCHEaU",
      },
      body: JSON.stringify({ title, description, tag }), // Send the new note details in the request body
    });

    if (!response.ok) {
      console.error("Failed to add note:", await response.text()); // Log an error if the API call fails
      return;
    }

    const note = await response.json(); // Parse the newly added note from the response

    // Update the notes state
    const newNotes = notes.concat(note); // Create a new array with the added note
    setNotes(newNotes); // Update the state with the new array
    console.log("Notes after addNote:", newNotes); // Log the updated state directly
  };

  const getNotes = async () => {
    // Get All Notes api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdlM2Q2N2RmOTIyMjUxYTJmN2Y4NTFlIn0sImlhdCI6MTc0Mjk4NDgyOX0.lccjbNEGMqoBIa1w5-Yd8X4-XXgDa-VInUi2xsCHEaU",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  const deleteNote = async (id) => {
    // ṬODO: DELETE NOTE API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdlM2Q2N2RmOTIyMjUxYTJmN2Y4NTFlIn0sImlhdCI6MTc0Mjk4NDgyOX0.lccjbNEGMqoBIa1w5-Yd8X4-XXgDa-VInUi2xsCHEaU",
      },
    });
    const json = response.json();
    console.log(json);

    console.log("note deleted " + id);
    const newNotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    setNotes(newNotes);
  };
  const editNote = async (id, title, description, tag) => {
    // API CALL to update the note on the server
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // Use PUT method for updates
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdlM2Q2N2RmOTIyMjUxYTJmN2Y4NTFlIn0sImlhdCI6MTc0Mjk4NDgyOX0.lccjbNEGMqoBIa1w5-Yd8X4-XXgDa-VInUi2xsCHEaU",
      },
      body: JSON.stringify({ title, description, tag }), // Send updated note details in the request body
    });

    if (!response.ok) {
      console.error("Failed to update note:", await response.text());
      return; // Exit if the API call fails
    }

    const updatedNote = await response.json(); // Parse the updated note from the response
    console.log(updatedNote);

    // Update the notes state with the modified note
    const newNotes = notes.map(
      (note) => (note._id === id ? { ...note, title, description, tag } : note) // Replace the updated note in the array
    );
    setNotes([...newNotes]); // Ensure a new array reference is created to trigger re-render
    console.log("Notes after editNote: ", newNotes); // Debug log to verify the updated notes
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
export default NotesState;
