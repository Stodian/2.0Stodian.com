import React from 'react';
import Service from '../../../client/src/components/stodian/Service';
import '../App.css'; // Import CSS styles if they are in a separate file
import ScrollingBoard from '../components/stodian/ScrollingBoard';

const Stodian = () => {
    return (
        <div className="container">
            <div className="snap-section"><Service /></div>
            <div className="ScrollingBoard"><ScrollingBoard /></div>
        </div>
    );
}

export default Stodian;