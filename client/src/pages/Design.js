import React from 'react';
import Service from '../../../client/src/components/design/Service.js';
import Process from '../../../client/src/components/design/Process.js';
import Projects from '../../../client/src/components/design/Projects.js';
import Testimonials from '../../../client/src/components/design/Testimonials.js';
import Custom from '../../../client/src/components/design/Custom.js';

const Design = () => {
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

export default Design;