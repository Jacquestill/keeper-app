import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Heading />
      {notes.map((entry) => (
        <Note key={entry.key} title={entry.title} content={entry.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
