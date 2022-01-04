import React from "react";
import NoteItem from "./Noteitemi";

export default function List({ onEdit, data, onDelete }) {
  return (
    <ul className="list">
      {data.map((item) => (
        <NoteItem
          key={item.id}
          onEdit={onEdit}
          id={item.id}
          name={item.name}
          note={item.note}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
