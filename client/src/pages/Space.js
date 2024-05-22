import React from 'react';
import Service from '../components/space/Service.js';
import Process from '../components/space/Process.js';
import Projects from '../components/space/Projects.js';
import Testimonials from '../components/space/Testimonials.js';
import Custom from '../components/space/Custom.js';

const Space = () => {
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

export default Space;