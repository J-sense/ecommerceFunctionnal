import React from 'react';
import { useLocation } from 'react-router-dom';

const ProoductDetails = () => {
    const {state} = useLocation()
    console.log(state)
    return (
        <div>
            Here we go...
        </div>
    );
};

export default ProoductDetails;