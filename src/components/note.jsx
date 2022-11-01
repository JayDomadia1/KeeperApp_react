import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button
        onClick={() => {
          props.removeNote(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
