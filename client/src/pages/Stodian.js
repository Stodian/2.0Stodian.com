import React from 'react';
import Service from '../../../client/src/components/stodian/Service';
import Process from '../../../client/src/components/stodian/Process';
import Projects from '../../../client/src/components/stodian/Projects';
import Testimonials from '../../../client/src/components/stodian/Testimonials';
import Custom from '../../../client/src/components/stodian/Custom';
import '../App.css'; // Import CSS styles if they are in a separate file

const Stodian = () => {
    return (
        <div className="scroll-container"> 
            <div className="snap-section"><Service /></div>
            <div className="snap-section"><Process /></div>
            <div className="snap-section"><Projects /></div>
            <div className="snap-section"><Testimonials /></div>
            <div className="snap-section"><Custom /></div>
        </div>
    );
}

export default Stodian;