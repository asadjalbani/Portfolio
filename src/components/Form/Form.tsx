import React, { useState } from 'react';
import { Container, ContainerSucces } from './styles';
import { toast, ToastContainer } from 'react-toastify';

export function Form() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct the message
    const whatsappMessage = `New form submission:\n\nEmail: ${email}\nMessage: ${message}`;

    // Send the message using UltraMsg API
    await sendWhatsAppMessage(whatsappMessage);
  };

  const sendWhatsAppMessage = async (message: string): Promise<void> => {
    const instanceID = 'instance93959'; // Replace with your UltraMsg instance ID
    const token = '9skhixsys51xd4r7'; // Replace with your UltraMsg token
    const phoneNumber = '+923308266470'; // Replace with the recipient's phone number
    const apiUrl = `https://api.ultramsg.com/${instanceID}/messages/chat?token=${token}&to=${encodeURIComponent(phoneNumber)}&body=${encodeURIComponent(message)}&priority=10`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET', // Using GET as per the provided URL
      });

      if (response.ok) {
        toast.success('Message sent successfully!', {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'succeeded',
        });

        setFormSubmitted(true);
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send message: ${errorData.message}`, {
          position: toast.POSITION.BOTTOM_LEFT,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: 'failed',
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error occurred while sending message.', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'error',
      });
    }
  };

  if (formSubmitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Send a message to get started."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={!email || !message}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
