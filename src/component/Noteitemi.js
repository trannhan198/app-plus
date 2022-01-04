import React from "react";

export default function NoteItem({ id, name, note, onEdit, onDelete }) {
  return (
    <li className="item">
      <div className="avatar">{name}</div>
      <div className="cmt">
        <div>{note}</div>
        <a onClick={() => onEdit(id)}>Edit</a>
        <a onClick={() => onDelete(id)}>Delete</a>
      </div>
    </li>
  );
}
