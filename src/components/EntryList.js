import React, { useState, useEffect } from 'react';
import fire from '../fire';
import Entry from './Entry';


export default function EntryList() {
    const [entryList, setEntryList] = useState();

    useEffect(() => {
        const entryRef = fire.database().ref("Entry")
        entryRef.on("value", (snapshot) => {
            const entries = snapshot.val();
            const entryList = []
            for (let id in entries) {
                entryList.push({ id, ...entries[id] });
            }
            setEntryList(entryList);
            console.log("ENTRYLIST: ", entryList);
        });
    }, []);
    return (
        <div>
            {entryList ? entryList.map((entry, index) => <Entry entry={entry} key={index} />)
                : ''}
        </div>
    )
}