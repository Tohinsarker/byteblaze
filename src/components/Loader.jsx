import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='min-h-screen'>
            <ScaleLoader size={100} color='red'></ScaleLoader>
        </div>
    );
};

export default Loader;