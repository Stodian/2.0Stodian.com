import React from 'react';
import Service from '../../../client/src/components/developments/Service.js';
import Process from '../../../client/src/components/developments/Process.js';
import Projects from '../../../client/src/components/developments/Projects.js';
import Testimonials from '../../../client/src/components/developments/Testimonials.js';
import Custom from '../../../client/src/components/developments/Custom.js';

const Developments = () => {
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

export default Developments;