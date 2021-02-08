import React from 'react';
import fire from '../fire';

const Entry = ({ entry }) => {
    const deleteEntry = () => {
        const entryRef = fire.database().ref("Todo").child(entry.id);
        entryRef.remove();
    }

    return (
        <div>
            <h8>{entry.details.title}</h8>
            <br></br>
            <h10>{entry.details.data}</h10>
            <button onClick={deleteEntry}>Delete
            </button>
        </div>

    )
}

export default Entry;


