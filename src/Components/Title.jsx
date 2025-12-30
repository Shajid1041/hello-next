import React from 'react';

const Title = ({children}) => {
    return (
        <div>
            <h1 className='text-5xl font-bold px-6 py-8 rounded text-black bg-linear-60 from-sky-300 to-sky-500'>{children}</h1>
        </div>
    );
};

export default Title;