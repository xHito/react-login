import React from 'react';
import TodoForm from '../components/TodoForm';

const Hero = ({ handleLogout }) => {
    return (
        <div className="heroConntent">
            <section className="hero">
                <nav>
                    <h2>Welcome</h2>
                    <button onClick={handleLogout}>Logout</button>
                </nav>
                <TodoForm />
            </section>

        </div>

    );
};

export default Hero;