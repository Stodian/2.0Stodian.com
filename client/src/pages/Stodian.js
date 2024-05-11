import React from 'react';
import Service from '../../../client/src/components/stodian/Service.js';
import Process from '../../../client/src/components/stodian/Process.js';
import Projects from '../../../client/src/components/stodian/Projects.js';
import Testimonials from '../../../client/src/components/stodian/Testimonials.js';
import Custom from '../../../client/src/components/stodian/Custom.js';

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