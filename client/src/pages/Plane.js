import React from 'react';
import Service from '../components/plane/Service.js';
import Process from '../components/plane/Process.js';
import Projects from '../components/plane/Projects.js';
import Testimonials from '../components/plane/Testimonials.js';
import Custom from '../components/space/Custom.js';

const Plane = () => {
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

export default Plane;