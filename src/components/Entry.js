import React from 'react';
import fire from '../fire';
import Card from '../components/Card';

const Entry = ({ entry }) => {
    const deleteEntry = () => {
        const entryRef = fire.database().ref("Entry").child(entry.id);
        entryRef.remove();
    }

    return (
        <div className={entry.details.title}>
            <Card
                title={entry.details.title}
                imgUrl='https://picsum.photos/200' alt=""
                content={entry.details.data}
            />
            <button onClick={deleteEntry}>Delete
            </button>
        </div>

    )
}

export default Entry;


