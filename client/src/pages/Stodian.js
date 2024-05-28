import React from 'react';
import Service from '../../../client/src/components/stodian/Service';
import '../App.css'; // Import CSS styles if they are in a separate file

const Stodian = () => {
    return (
        <div className="scroll-container"> 
            <div className="snap-section"><Service /></div>
        </div>
    );
}

export default Stodian;