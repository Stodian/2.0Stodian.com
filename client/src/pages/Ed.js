import React from 'react';
import Service from '../../../client/src/components/ed/Service.js';
import Process from '../../../client/src/components/ed/Process.js';
import Projects from '../../../client/src/components/ed/Projects.js';
import Testimonials from '../../../client/src/components/ed/Testimonials.js';
import Custom from '../../../client/src/components/ed/Custom.js';

const Home = () => {
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

export default Home;