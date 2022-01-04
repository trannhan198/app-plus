import "./styles.css";
import React, { useState } from "react";
import List from "./component/List";
import AddForm from "./component/AddForm";

export default function App() {
    const [show, setShow] = useState(false);
    const [id, setId] = useState("");
    const [user, setUser] = useState('NhânTV')
    const [note, setNote] = useState("");
    const [data, setData] = useState([]);

    const onEdit = (id) => {
        const item = data.find((item) => item.id === id);

        if (item) {
            setId(item.id);
            setNote(item.note);
            setShow(true);
        }
    };

    const onDelete = (id) => {
        const index = data.findIndex((item) => item.id === id);
        if (index > -1) {
            data.splice(index, 1);
            setData([...data]);
        }
    };

    const hideForm = () => {
        setId("");
        setNote("");
        setShow(false);
    };

    const onAdd = () => {
        setShow(true);
    };

    console.log(data);

    const onSave = (id, note) => {
        if (id) {
            const index = data.findIndex((item) => item.id === id);
            if (index > -1) {
                data[index].note = note;
            }
        } else {
            data.push({
                id: new Date().getTime(),
                note: note,
                name: user
            });
        }

        setData([...data]);
        setShow(false);
    };

    return (
        <div className="App">
            <div>
                <input class="form-control"  onClick={onAdd} placeholder="Bạn đang nghĩ gì...?" />
            </div>
            <List onEdit={onEdit} onDelete={onDelete} data={data} />
            <AddForm
                show={show}
                id={id}
                note={note}
                hideForm={hideForm}
                onSave={onSave}
            />
        </div>
    );
}