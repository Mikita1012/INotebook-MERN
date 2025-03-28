import React from "react";

function Alert(props) {
  return (
    <div className="alert alert-primary" role="alert">
      {props.message} this is amazing app
    </div>
  );
}

export default Alert;
