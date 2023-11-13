import React from "react";

function NotesSearch({ onSearch }) {
  return (
    <div className="note-app__search">
      <input
        type="text"
        placeholder="Cari Catatan..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default NotesSearch;
