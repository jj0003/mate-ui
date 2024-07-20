import { useState } from 'react';

export default {
    title: 'Welcome to Mate-UI',
};

export const Welcome = () => {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText('npm install mate-ui').then(() => {
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(''), 2000); // Reset message after 2 seconds
        }, () => {
            setCopySuccess('Failed to copy');
        });
    };

    return (
        <div style={{ margin: '0 auto', maxWidth: '960px', padding: '40px' }}>
            <h1 style={{ fontSize: '48px', textAlign: 'left' }}>Welcome to Mate-UI</h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Mate-UI is a comprehensive library of UI components designed to facilitate the development of rich, interactive web applications. Crafted with attention to detail and a focus on ease of use, Mate-UI is built using React, a popular JavaScript library for building user interfaces.
            </p>
            {/* Other paragraphs */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
            <pre style={{ background: '#f4f4f4', padding: '20px', fontSize: '16px', borderRadius: '10px' }}>
                npm install mate-ui
            </pre>
                <button onClick={copyToClipboard} style={{ position: 'absolute', top: '20px', right: '20px' }}>
                    Copy
                </button>
                {copySuccess && <span style={{ color: 'green', marginLeft: '10px' }}>{copySuccess}</span>}
            </div>
            {/* Remaining content */}
        </div>
    );
};