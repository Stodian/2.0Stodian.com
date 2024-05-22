import React, { useState, useEffect, useMemo } from 'react';

const Typewriter = () => {
    const messages = useMemo(() => ["Residential", "Commercial", "Industrial", "Educational", "Public"], []);
    const typingSpeed = 150;
    const deletingSpeed = 75;

    const [currentMessage, setCurrentMessage] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        let timeout;

        const handleTyping = () => {
            setText(messages[currentMessage].substring(0, charIndex));
            setCharIndex(charIndex => isDeleting ? charIndex - 1 : charIndex + 1);
        };

        if (!isDeleting && charIndex < messages[currentMessage].length) {
            timeout = setTimeout(handleTyping, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(handleTyping, deletingSpeed);
        } else {
            setIsDeleting(!isDeleting);
            setCharIndex(0);
            if (!isDeleting) {
                setCurrentMessage((currentMessage + 1) % messages.length);
            }
            timeout = setTimeout(handleTyping, isDeleting ? 500 : 2000);
        }

        return () => clearTimeout(timeout); // Cleanup timeout
    }, [charIndex, currentMessage, isDeleting, messages]);

    return (
        <span id="dynamic" style={{
            fontsize: '3.5rem',               /* Large text similar to h1 */
            marginTop: '30px',                /* Large top margin to separate from elements above */
            marginBottom: '2px',              /* Small bottom margin */
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", /* Font styling */
            backgroundColor: 'transparent',       /* Light gray background color */
            color: '#800000',                     /* Dark gray text color */
            fontWeight: 'bold', /* Makes the text bold */
            zIndex: 1,
        }}>{text}</span>
    );
};

export default Typewriter;