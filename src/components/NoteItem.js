import React from "react";

function NoteItem(props) {
  const {
    ele = { title: "Default Title", description: "Default Description" },
  } = props;
  return (
    <div className="col mb-3" >
      <div className="card my-3" key={ele._id}>
        <div className="card-body">
          <div className="d-flex align-items-center" >
            <h5 className="card-title">{ele.title}</h5>
            <i className="fa-solid fa-trash mx-2"></i>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
          </div>

          <p className="card-text">{ele.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
