import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // inside App.jsx

  return (
    <div>
      <Header />

      {/* This allows the CreateArea to stay centered alone */}
      <div className="create-area-container">
        <CreateArea onAdd={addNote} />
      </div>

      {/* NEW: Wrap all notes in a grid container */}
      <div className="notes-grid">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
