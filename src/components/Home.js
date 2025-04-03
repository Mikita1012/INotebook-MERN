import React, { useContext } from "react";
import Notes from "./Notes";
import NotesContext from "../context/notes/NotesContext";

function Home() {
  
  return (
    <div>
      <Notes />
    </div>
  );
}

export default Home;
