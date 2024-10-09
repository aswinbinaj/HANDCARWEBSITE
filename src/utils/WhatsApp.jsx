import React from "react";

const WhatsApp = () => {
  const phoneNumber = "+919539711107";

  // Function to handle chat button click
  const handleChatClick = () => {
    const message = "Hi, I would like to chat with you";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <button onClick={handleChatClick}>contact us</button>
    </div>
  );
};

export default WhatsApp;
