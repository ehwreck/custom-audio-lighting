import React, { useState, useRef } from 'react';
import './interactive_card.styles.css';
import emailjs from '@emailjs/browser';
import InteractiveButton from '../interactive_button/interactive_button.component';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';

const InteractiveCard = (props) => {
  const {
    id,
    title,
    type,
    tel,
    backgroundColor,
    color,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    boxShadow,
  } = props;

  const [hovered, setHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const types = {
    tel: (
      <h3 className="call-header" style={{ color: `${color}` }}>
        <a href={`tel:${tel}`}>{title}</a>
        <CallIcon className="icon" />
      </h3>
    ),
    form: !flipped ? (
      <h3 className="form-header" onClick={() => setFlipped(true)}>
        {title}
        <ChatIcon className="icon" />
      </h3>
    ) : (
      <form ref={form} onSubmit={sendEmail} id="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <InteractiveButton
          type="submit"
          text="Send"
          className="form-button"
          clickHandler={sendEmail}
        />
        <InteractiveButton
          type="button"
          text="Close"
          className="form-button"
          clickHandler={() => setFlipped(false)}
        />
      </form>
    ),
  };

  const toggleFlipped = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={'i-card' + (hovered ? ' hovered' : '')}
      id={id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: `${backgroundColor}`,
        borderTop: `${borderTop}`,
        borderRight: `${borderRight}`,
        borderBottom: `${borderBottom}`,
        borderLeft: `${borderLeft}`,
        boxShadow: `${boxShadow}`,
      }}
    >
      {types[type]}
    </div>
  );
};

export default InteractiveCard;
