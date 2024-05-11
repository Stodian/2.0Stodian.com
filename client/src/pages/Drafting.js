import React from 'react';
import Service from '../../../client/src/components/drafting/Service.js';
import Process from '../../../client/src/components/drafting/Process.js';
import Projects from '../../../client/src/components/drafting/Projects.js';
import Testimonials from '../../../client/src/components/drafting/Testimonials.js';
import Custom from '../../../client/src/components/design/Custom.js';

const Drafting = () => {
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

export default Drafting;