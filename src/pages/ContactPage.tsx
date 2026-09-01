import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';
import { ContactFormData } from '../types';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Portfolio contact form submission',
    message: '',
    company: '', // Honeypot anti-spam field
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'spam'; msg: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company) {
      setStatus({ type: 'spam', msg: 'Spam submission blocked.' });
      return;
    }
    setIsSubmitting(true);
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
        setStatus({ type: 'success', msg: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', subject: 'Portfolio contact form submission', message: '', company: '' });
      } else {
        setStatus({ type: 'error', msg: 'Unable to deliver message to /contact.php server endpoint.' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Error submitting contact form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="py-8 md:py-12">
      <Container>
        <div className="pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark">
          <span className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent font-semibold uppercase tracking-wider">
            Contact &amp; Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
            Get in Touch
          </h1>
          <p className="text-content-light-secondary dark:text-content-dark-secondary font-body mt-2">
            Communicate directly via preserved POST <code className="font-mono-tech text-xs bg-gray-100 dark:bg-surface-dark-elevated px-1.5 py-0.5 rounded">/contact.php</code> mail handler.
          </p>
        </div>

        <Card className="max-w-2xl p-6 md:p-8">
          {status && (
            <div
              className={`p-4 rounded-brand-sm mb-6 flex items-start gap-3 text-sm font-body ${
                status.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-300 border border-red-200 dark:border-red-800'
              }`}
            >
              {status.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
              )}
              <div>{status.msg}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot Field */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <Input
              label="Your Name"
              required
              placeholder="e.g. Jane Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <Input
              label="Your Email Address"
              type="email"
              required
              placeholder="e.g. jane@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <Textarea
              label="Your Message"
              required
              rows={5}
              placeholder="Describe your inquiry, project opportunity, or question..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
            >
              Send Message
            </Button>
          </form>
        </Card>
      </Container>
    </Section>
  );
};
