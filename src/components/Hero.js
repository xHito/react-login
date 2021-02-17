import React from 'react';
import EntryForm from '../components/EntryForm';
import EntryList from './EntryList';

const Hero = ({ handleLogout, user }) => {
    return (
        <div className="heroTopNav">
            <h2>Welcome {user.email}</h2>
            <button onClick={handleLogout}>Logout</button>
            <div className="entryDiv">
                <EntryForm user={user} />
            </div>
            <div className="entryContent">
                <div className="row">
                    <div className="column">
                        <EntryList />
                    </div>
                </div>

            </div>



        </div>

    );
};

export default Hero;