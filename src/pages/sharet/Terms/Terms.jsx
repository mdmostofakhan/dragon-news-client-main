import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container mx-auto'>
            <p>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Sit facilis consequatur
                 omnis minus nobis aspernatur dolorem 
                 commodi voluptate, veritatis corrupti 
                 adipisci unde? Pariatur assumenda 
                 consectetur ab, corrupti expedita
                  provident quo necessitatibus dolore 
                  molestias quibusdam recusan</p>
                  
                  <p><Link to='/register'>Registers</Link></p>
        </div>
    );
};

export default Terms;