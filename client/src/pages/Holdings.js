import React from 'react';
import Service from '../../../client/src/components/holdings/Service.js';
import Process from '../../../client/src/components/holdings/Process.js';
import Projects from '../../../client/src/components/holdings/Projects.js';
import Testimonials from '../../../client/src/components/holdings/Testimonials.js';
import Custom from '../../../client/src/components/holdings/Custom.js';

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