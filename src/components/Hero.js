import React from 'react';
import EntryForm from '../components/EntryForm';
import EntryList from './EntryList';

const Hero = ({ handleLogout }) => {
    return (
        <div className="heroContent">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className="entryDiv">
                <EntryForm />
            </div>
            <div className="entryContent">
                <EntryList />
            </div>



        </div>

    );
};

export default Hero;