import React, { useContext, useState } from "react";
import NotesContext from "../context/notes/NotesContext";


function AddANote() {
  const context = useContext(NotesContext);
  const { addNote } = context;
  const [note, setNote] = useState({title: "" , description: "", tag: ""})

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""});
  };
  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title 
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onChange}
              id="title"
              value={note.title}
              name="title"
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="textarea"
              className="form-control"
              onChange={onChange}
              id="description"
              value={note.description}
              name="description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onChange}
              id="tag"
              value={note.tag}
              name="tag"
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddANote;
