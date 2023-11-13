import React from "react";
import NotesSearch from "./NotesSearch";

function NotesHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Todo List</h1>
      <NotesSearch onSearch={onSearch} />
    </div>
  );
}

export default NotesHeader;
