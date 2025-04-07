"use client";

import React, { useState } from 'react';
import axios from 'axios';

function ConForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      alert('Please fill all the fields');
      return;
    }

    const body = { fullName, email, message };

    try {
      const headers = { 
        'Content-Type': 'application/json',
      };
      const sendmail = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}api/nodemailer`,
        JSON.stringify(body), 
        {
          headers: headers, 
        }
      );
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}api/form`,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success===true && sendmail.data.success===true) {
        alert('Message sent successfully');
      } else {
        alert('Failed to send message');
      }

      setFullName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
      <h1 className="text-4xl">Contact Me</h1>
        <label className="block mb-1" htmlFor="fullName">
          Full Name:
        </label>
        <input
          className="border border-gray-300 p-2 mb-2 w-full rounded max-h-dvh"
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <label className="block mb-1" htmlFor="email">
          Email:
        </label>
        <input
          className="border border-gray-300 p-2 mb-2 w-full rounded"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block mb-1" htmlFor="message">
          Message:
        </label>
        <textarea
          className="border border-gray-300 p-2 mb-2 w-full rounded"
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 hover:bg-gray-800 transition rounded-xl"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConForm;
