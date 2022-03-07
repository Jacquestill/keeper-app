import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [area, setArea] = useState([]);

  function addNote(newNote) {
    setArea((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {area.map((showNotes, index) => (
        <Note key={index} title={showNotes.title} content={showNotes.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
