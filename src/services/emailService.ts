import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_v6yhvw1';
const TEMPLATE_ID = 'template_111z8nj';
const PUBLIC_KEY = '3zKcBp97Tr4EuSTZ_'; // Public key (User ID)
export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'Shanmuga Technovative Solutions',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

export const sendNewsletterSubscription = async (email: string): Promise<boolean> => {
  try {
    const templateParams = {
      subscriber_email: email,
      to_name: 'Shanmuga Technovative Solutions',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      'newsletter_template_id', // Replace with your newsletter template ID
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Newsletter subscription failed:', error);
    return false;
  }
};