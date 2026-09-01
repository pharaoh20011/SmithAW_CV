import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Portfolio contact form submission',
    message: '',
    company: '', // Honeypot field
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company) {
      setStatus('Spam detected.');
      return;
    }
    try {
      const body = new URLSearchParams();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('subject', formData.subject || '');
      body.append('message', formData.message);
      body.append('company', formData.company || '');

      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message via contact.php');
      }
    } catch (err) {
      setStatus('Error submitting form to contact.php endpoint.');
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-secondary">Contact Route Baseline</h1>
      <p className="text-gray-600">Placeholder for Contact Form communicating with POST /contact.php.</p>
      
      {status && <div className="p-3 bg-blue-100 text-blue-800 rounded">{status}</div>}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border rounded p-2 text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border rounded p-2 text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border rounded p-2 text-gray-900"
            rows={4}
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover">
          Submit Form
        </button>
      </form>

      <div className="pt-4">
        <Link to="/" className="text-primary hover:underline">&larr; Back to Home</Link>
      </div>
    </div>
  );
};
