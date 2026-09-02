import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';
import { ContactFormData } from '../types';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Github, Linkedin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Portfolio contact inquiry',
    message: '',
    company: '', // Honeypot anti-spam field
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'spam'; msg: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact Anthony W. Smith | Front-End Developer';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company) {
      setStatus({ type: 'spam', msg: 'Spam submission detected.' });
      return;
    }
    setIsSubmitting(true);
    try {
      const body = new URLSearchParams();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('subject', formData.subject || 'Portfolio contact inquiry');
      body.append('message', formData.message);
      body.append('company', formData.company || '');

      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (response.ok) {
        setStatus({ type: 'success', msg: 'Thank you! Your message has been delivered successfully.' });
        setFormData({ name: '', email: '', subject: 'Portfolio contact inquiry', message: '', company: '' });
      } else {
        setStatus({ type: 'error', msg: 'Unable to deliver message via /contact.php server endpoint. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Error submitting form. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="py-8 md:py-16">
      <Container>
        {/* Header Title */}
        <div className="pb-6 mb-8 border-b border-stroke-light dark:border-stroke-dark">
          <span className="text-xs font-mono-tech text-brand-primary dark:text-brand-accent font-semibold uppercase tracking-wider">
            // INQUIRIES &amp; COLLABORATION
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mt-1">
            Get in Touch
          </h1>
          <p className="text-content-light-secondary dark:text-content-dark-secondary font-body mt-2 max-w-2xl">
            Have a question, full-time development opportunity, or client project proposal? Send a message directly using the form below.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Authentic Contact Graphic & Info */}
          <div className="lg:col-span-5 space-y-6">
            <Card elevation="elevated" className="overflow-hidden border border-stroke-light dark:border-stroke-dark">
              <img
                src="/assets/img/contact_image_600x451.png"
                alt="Anthony W. Smith Contact & Workspace Graphic"
                width={600}
                height={451}
                loading="eager"
                className="w-full h-auto object-cover object-center"
              />
              <div className="p-6 space-y-4 bg-surface-light dark:bg-surface-dark-card">
                <h2 className="text-xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary">
                  Anthony W. Smith
                </h2>
                <p className="text-sm font-body text-content-light-secondary dark:text-content-dark-secondary leading-relaxed">
                  Front-End Developer &amp; UI/UX Designer dedicated to building responsive, accessible, and high-performance web experiences.
                </p>
                <div className="space-y-2.5 pt-2 text-xs font-mono-tech text-content-light-secondary dark:text-content-dark-secondary border-t border-stroke-light/60 dark:border-stroke-dark/60">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-primary dark:text-brand-accent shrink-0" />
                    <a href="mailto:aw.smith@live.com" className="hover:underline text-brand-primary dark:text-brand-accent font-medium">
                      aw.smith@live.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-primary dark:text-brand-accent shrink-0" />
                    <span>United States &bull; Remote Available</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-stroke-light/60 dark:border-stroke-dark/60">
                  <a
                    href="https://github.com/pharaoh20011"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile (opens in new tab)"
                    className="p-2 rounded-brand-xs bg-gray-100 dark:bg-surface-dark-elevated text-content-light-secondary dark:text-content-dark-secondary hover:text-brand-primary dark:hover:text-brand-accent transition-colors focus-ring"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/pharaoh20011"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile (opens in new tab)"
                    className="p-2 rounded-brand-xs bg-gray-100 dark:bg-surface-dark-elevated text-content-light-secondary dark:text-content-dark-secondary hover:text-brand-primary dark:hover:text-brand-accent transition-colors focus-ring"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card elevation="elevated" className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold font-heading text-content-light-primary dark:text-content-dark-primary mb-6">
                Send a Message
              </h2>

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

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Anti-spam Honeypot Field */}
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
                  label="Your Full Name"
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

                <Input
                  label="Subject"
                  placeholder="e.g. Project Opportunity / Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />

                <Textarea
                  label="Your Message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, team opportunity, or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};
