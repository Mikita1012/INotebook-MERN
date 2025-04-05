import React, { useContext, useEffect, useRef, useState } from "react";
import NotesContext from "../context/notes/NotesContext";
import NoteItem from "./NoteItem";

const NotesList = (props) => {
  const { notes, getNotes, editNote } = useContext(NotesContext);
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  },[]);
  

  useEffect(() => {
    console.log("Notes updated in NotesList:", notes); // Debug log to verify that the notes state is updated
  }, [notes]); // Re-run this effect whenever the notes state changes

  const ref = useRef(null);

  const updateNote = (currentNote) => {
    console.log("updateNote called with:", currentNote); // Debug log
    if (!currentNote || !currentNote.title || !currentNote.description || !currentNote.tag) {
      console.error("updateNote called with invalid currentNote", currentNote);
      return;
    }
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag); // Call editNote with the updated note details
    console.log("Note updated:", note); // Debug log to verify the updated note

    // Close the modal programmatically after updating the note
    const modalCloseButton = document.querySelector('[data-bs-dismiss="modal"]');
    if (modalCloseButton) modalCloseButton.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          ref={ref}
        >
          Launch demo modal
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChange}
                      id="etitle"
                      value={note.etitle}
                      name="etitle"
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
                      id="edescription"
                      value={note.edescription}
                      name="edescription"
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
                      id="etag"
                      value={note.etag}
                      name="etag"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="row">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem key={note._id} ele={note} updateNote={updateNote} />
          ))
        ) : (
          <p>No notes available</p>
        )}
      </div>
    </>
  );
};

export default NotesList;
