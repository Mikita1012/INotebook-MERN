import React, { useContext, useEffect, useState } from "react";
import NotesContext from "../context/notes/NotesContext";


function AddANote(props) {
  const context = useContext(NotesContext);
  const { addNote } = context;
  const [note, setNote] = useState({title: "" , description: "", tag: ""})

  useEffect(() => {
    console.log("Notes added :", note); 
    addNote();
    // eslint-disable-next-line
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""});
    props.showAlert("Note added successfully", "success");
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
              minLength={3}
              required
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
              minLength={10}
              required
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
            disabled={note.title < 3 || note.description < 10 }
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddANote;
