import React from 'react';

function AboutUs() {
    const pageStyle = {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    };

    const sectionStyle = {
        marginBottom: '30px',
        textAlign: 'center',
    };

    const imageStyle = {
        width: '100%',
        maxHeight: '300px',
        objectFit: 'cover'
    };

    return (
        <div style={pageStyle}>
            <div style={sectionStyle}>
                <h1>About Stodian Design</h1>
                <img src="team-photo.jpg" alt="Stodian Design Team" style={imageStyle} />
                <p>We are a team of passionate designers and architects dedicated to creating sustainable and innovative spaces. Founded in 2010, Stodian Design has been at the forefront of modern architectural solutions, focusing on environmental sustainability and cutting-edge design.</p>
            </div>
            <div style={sectionStyle}>
                <h2>Our Mission</h2>
                <p>To lead the industry in creating value for ourselves and our clients through dedication, passion, and excellence in design while also enhancing the community and protecting the environment.</p>
            </div>
            <div style={sectionStyle}>
                <h2>Meet Our Team</h2>
                <p>Our team consists of skilled professionals from diverse backgrounds, each bringing a unique perspective to our projects. Together, we strive to exceed expectations and continue to push the boundaries of what is possible in architecture.</p>
                {/* This could be expanded into a full team gallery component */}
            </div>
        </div>
    );
}

export default AboutUs;