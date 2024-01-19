import React from 'react';
import './contact_form.styles.css';
import InteractiveCard from '../interactive_card/interactive_card.component';

const ContactForm = () => {
  return (
    <div id="contact-us">
      <h2 id="header">We are waiting to hear from you!</h2>
      <div>
        <InteractiveCard
          title="Call Us"
          type="tel"
          tel="+19566242463"
          backgroundColor="rgb(114,191,128)"
          color="black"
        />
        <InteractiveCard title="Message Us" type="form" />
      </div>
    </div>
  );
};

export default ContactForm;
