import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import Zoom from "@mui/material/Zoom";

export default function CreateNote(props) {
  let [clicked, setClicked] = useState(false);
  let [note, setNote] = useState({
    title: "",
    text: "",
  });
  let handleChange = (event) => {
    let { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  let handleClicked = (event) => {
    event.preventDefault();
    props.onAdd(note);
    setNote(() => {
      return {
        title: "",
        text: "",
      };
    });
  };
  let inputClicked = () => {
    setClicked(true);
  };
  return (
    <div>
      <form className="create-note">
        {clicked ? (
          <input
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          ></input>
        ) : null}

        <textarea
          value={note.text}
          onChange={handleChange}
          onClick={inputClicked}
          name="text"
          placeholder="Take a note..."
          rows={clicked ? 3 : 1}
        ></textarea>
        <Zoom in={clicked}>
          <IconButton onClick={handleClicked}>
            <AddIcon />
          </IconButton>
        </Zoom>
      </form>
    </div>
  );
}
