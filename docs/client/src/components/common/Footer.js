import React from 'react'

const Footer = () => {
    const footerStyle={
        textAlign: 'center',
        padding: '20px',
        backgroundColor:'var(--footer)',
        color: 'black'
    }
    return (
        <div style={footerStyle}>
            &copy; Gaurav Walia 2020
        </div>
    )
}

export default Footer;
