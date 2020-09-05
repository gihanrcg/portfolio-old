import React, { Component } from 'react';
import ContactUs from '../contactUs/ContactUs';

class ContactUsSection extends Component {
    render() {
        return (
            <div>
                <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="contact">
                <div className="w-100" style={{padding:'10px'}}>
                    <h2 className="mb-5">Contact ME</h2>
                    <ContactUs/>
                </div>
            </section>
            </div>
        );
    }
}

export default ContactUsSection;