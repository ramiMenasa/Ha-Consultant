import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='bg-light py-5'>
            <div className="container contact-us bg-light">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6 contact-info">
                        <h3>Contact Information</h3>
                        <p><strong>Address:</strong> 1234 Street Name, City, State, 12345</p>
                        <p><strong>Email:</strong> contact@example.com</p>
                        <p><strong>Phone:</strong> (123) 456-7890</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

