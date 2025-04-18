import React, { useContext } from "react";
import NotesContext from "../context/notes/NotesContext";
import '../components/NoteItem.css'

function NoteItem(props) {

  const context = useContext(NotesContext);
  const { deleteNote} = context;


  const onDelete = (id) => {
    deleteNote(id);
    props.showAlert("Note deleted successfully", "primary");
  };


  const {
    ele = { title: "Default Title", description: "Default Description" },
  } = props;
  return (
    <div className="col mb-3">
      <div className="card my-3 shadow p-3bg-body-tertiary rounded border border-primary-subtle border-4" key={ele._id}>
        <div className="card-body">
          <div className="d-flex align-items-center border-bottom">
            <h5 className="card-title">{ele.title}</h5>

            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                onDelete(ele._id);
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square"
              onClick={() => {
                props.updateNote(ele); // Pass the current note object (ele) to the updateNote function
              }}
            ></i>
            <h5 className="blockquote-footer mb-0 text-end mx-3">{ele.tag}</h5>
          </div>

          <p className="card-text">{ele.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
