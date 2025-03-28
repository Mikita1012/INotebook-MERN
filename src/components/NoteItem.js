import React from "react";

function NoteItem(props) {
  const {
    ele = { title: "Default Title", description: "Default Description" },
  } = props;
  return (
    <div className="col mb-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{ele.title}</h5>
          <p className="card-text">
            {ele.description} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Saepe deserunt qui, nemo, veritatis quam alias eum
            eveniet enim, dolores ab nostrum. Dicta voluptate necessitatibus
            laudantium perspiciatis voluptates eum, facere tempora! Cumque,
            dolores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
