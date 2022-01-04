import React, { useState, useEffect } from "react";

export default function AddForm({ id, note, hideForm, onSave, show = false }) {
  const [formNote, setFormNote] = useState(note);

  useEffect(() => {
    setFormNote(note);
  }, [note]);

  const onChange = (e) => {
    setFormNote(e.target.value);
  };

  const onClickSave = (e) => {
    e.preventDefault();
    onSave(id, formNote);
    setFormNote("");
  };

  const onCancel = (e) => {
    e.preventDefault();
    setFormNote("");
    hideForm();
  };
  return (
    <>
      <div className={`overlay ${!show && "hidden"}`} />
      <div className={`form ${!show && "hidden"}`}>
        <form>
          <h4>{id ? "chỉnh sửa comment" : "thêm comment"}</h4>
          <div>
            <input value={formNote} onChange={onChange} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <button className="btn btn-primary" onClick={onClickSave}>Save</button>
            <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}
