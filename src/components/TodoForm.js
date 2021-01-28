import React, { useState } from 'react';
import fire from '../fire';

function TodoForm() {
    const [details, setDetails] = useState({ title: "", data: "" });


    const submitHandler = e => {
        e.preventDefault();
        setDetails(details);
        createEntry();
    };

    const createEntry = () => {
        const entryRef = fire.database().ref("Todo");
        const entry = {
            details,
            complete: false,
        }
        entryRef.push(entry);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="header">Note Entry
                    <div className="content">
                        <div className="container">
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Title:</label>
                    <input type="text" name="title" id="title" onChange={e => setDetails({ ...details, title: e.target.value })} value={details.title} pattern=".{1,}" required title="1 character minimum" />
                </div>
                <div className="form-group">
                    <label htmlFor="data">Data:</label>
                    <input type="text" name="data" id="data" onChange={e => setDetails({ ...details, data: e.target.value })} value={details.data} required />
                </div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default TodoForm;