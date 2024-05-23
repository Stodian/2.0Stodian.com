import React from 'react';
import linkedinIcon from '../../../../client/src/assets/icons/socials/2644994_linkedin_media_social_icon.png';
import instagramIcon from '../../../../client/src/assets/icons/socials/4691240_instagram_icon.png';
import twitterIcon from '../../../../client/src/assets/icons/socials/2644990_media_social_twitter_icon.png';
import youtubeIcon from '../../../../client/src/assets/icons/socials/2644987_media_social_youtube_icon.png';

function Footer() {
    return (
        <footer style={{
            width: '100%',
            position: 'relative',
            zIndex: 0
        }}>
            <div style={{
                width: '100%',
                backgroundColor: 'rgba(51, 51, 51, 0.2)', // Semi-transparent background
                borderTop: '1px solid #ccc', // Adds a top border with a light grey color
                padding: '2px 0', // Padding top and bottom for some spacing
                boxSizing: 'border-box', // Ensures padding doesn't affect the width
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                zIndex: -1
            }}></div>
            <div className="content-container" style={{ 
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px 0',
                opacity: 1 // Ensures text and icons are fully opaque
            }}>
                <hr className="footer-line" />
                <div className="social-links" style={{
                    display: 'flex',
                    gap: '10px'
                }}>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram Icon" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter Icon" />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <img src={youtubeIcon} alt="YouTube Icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
