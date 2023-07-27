
import React, { useState } from 'react';
import '../styles/ContactForm.css';
import contact from '../images/contactt.jpg'
import EmailIcon from '@mui/icons-material/Email';
import { InputAdornment } from '@mui/material';
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        const mailtoLink = `Mailto:gsa58571@example.com?subject= Contact&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="contact-container">

            <div className="contact-form">

                <form onSubmit={handleSubmit}>
                    <div className="form-group">

                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>

            <div className="contact-image">
                <img src={contact} alt="Contact" />
            </div>
        </div>
    );
};

export default ContactForm;


