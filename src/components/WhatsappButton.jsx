import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '529514691353'; // Replace with the target phone number, including country code
  const message = 'Hello, this is a pre-scripted message!'; // Replace with your message

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message); // Ensure the message is URL-encoded
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp link in a new window/tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <button onClick={handleClick}>
      Send Message on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
