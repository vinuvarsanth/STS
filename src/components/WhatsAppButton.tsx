import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+919876543210'; // Replace with actual WhatsApp number
  const message = 'Hello! I would like to know more about your IT services.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;