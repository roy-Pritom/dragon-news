import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container my-5 p-4'>
            <h2 className='text-primary fw-bold mb-2'>Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat laborum suscipit rem alias molestias quod magnam eius perferendis quo ratione quidem incidunt fugiat natus corrupti, mollitia velit rerum, repellendus vero explicabo! Blanditiis, necessitatibus nihil consequatur odit aut, culpa repellat saepe iure voluptatibus maiores, itaque minima officia quidem? Quos, quibusdam.</p>
            <p>Go back <Link to='/login/register'>Register</Link></p>
        </div>
    );
};

export default Terms;