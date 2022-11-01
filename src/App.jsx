import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/note";

export default function App() {
  let [list, setList] = useState([]);
  let addNote = (note) => {
    setList((prevList) => {
      return [...prevList, note];
    });
  };
  let deleteNote = (id) => {
    // console.log(`delete item ${id}`);
    setList((list) => {
      return list.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <Footer />
      <CreateNote onAdd={addNote} />
      {list.map((listItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={listItem.title}
            text={listItem.text}
            removeNote={deleteNote}
          />
        );
      })}
    </div>
  );
}
