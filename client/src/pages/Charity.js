import React from 'react';
import Service from '../../../client/src/components/charity/Service.js';
import Process from '../../../client/src/components/charity/Process.js';
import Projects from '../../../client/src/components/charity/Projects.js';
import Testimonials from '../../../client/src/components/charity/Testimonials.js';
import Custom from '../../../client/src/components/charity/Custom.js';

const Charity = () => {
    return (
        <div>
            <Service />
            <Process />
            <Projects />
            <Testimonials />
            <Custom />
        </div>
    );
}

export default Charity;