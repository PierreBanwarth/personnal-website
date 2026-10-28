'use client';

import { FormEvent, useState } from 'react';
import { useT } from '@/lib/useT';

export default function ContactPage() {
    const t = useT();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // This is a placeholder implementation
        // In production, you would send this to a backend service
        console.log('Form submitted:', formData);

        // Show success message
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="bg-warm-white min-h-screen">
            {/* Header */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">{t('contact.title')}</h1>
                <p className="text-lg text-charcoal/70 max-w-3xl">
                    {t('contact.description')}
                </p>
            </section>

            {/* Contact Content */}
            <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-xl font-bold text-charcoal mb-6">{t('contact.getInTouch')}</h2>

                        <div className="space-y-6">
                            {/* Email */}
                            <div>
                                <h3 className="font-semibold text-charcoal mb-2">{t('contact.email')}</h3>
                                <a
                                    href="mailto:contact@pierrebanwarth.com"
                                    className="text-charcoal hover:text-charcoal/60 transition-colors break-all"
                                >
                                    contact@pierrebanwarth.com
                                </a>
                            </div>

                            {/* Instagram */}
                            <div>
                                <h3 className="font-semibold text-charcoal mb-2">{t('contact.instagram')}</h3>
                                <a
                                    href="https://instagram.com/pierre_banwarth"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-charcoal hover:text-charcoal/60 transition-colors"
                                >
                                    @pierre_banwarth
                                </a>
                            </div>

                            {/* Topics */}
                            <div>
                                <h3 className="font-semibold text-charcoal mb-3">{t('contact.interested')}</h3>
                                <ul className="space-y-2 text-sm text-charcoal/70">
                                    <li>• {t('contact.commissions')}</li>
                                    <li>• {t('contact.documentation')}</li>
                                    <li>• {t('contact.prints')}</li>
                                    <li>• {t('contact.exhibitions')}</li>
                                    <li>• {t('contact.technical')}</li>
                                    <li>• {t('contact.other')}</li>
                                </ul>
                            </div>

                            {/* About Response Time */}
                            <div className="p-4 bg-charcoal/5 rounded border border-charcoal/10">
                                <p className="text-xs text-charcoal/70">
                                    {t('contact.responseTime')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-xl font-bold text-charcoal mb-6">{t('contact.getInTouch')}</h2>

                        {submitted ? (
                            <div className="p-6 bg-cyanotype/10 border border-cyanotype rounded">
                                <p className="text-charcoal font-semibold mb-2">{t('contact.messageSent')}</p>
                                <p className="text-sm text-charcoal/80">
                                    {t('contact.messageReceivedDesc')}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                                        {t('contact.formName')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-charcoal/20 rounded text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-charcoal/30"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                                        {t('contact.formEmail')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-charcoal/20 rounded text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-charcoal/30"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                                        {t('contact.formSubject')}
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-charcoal/20 rounded text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/30"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="collaboration">Collaboration / Commission</option>
                                        <option value="exhibition">Exhibition / Publication</option>
                                        <option value="cyanotypes">Cyanotype Prints</option>
                                        <option value="documentation">Performance Documentation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                                        {t('contact.formMessage')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-2 border border-charcoal/20 rounded text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-charcoal/30 resize-none"
                                        placeholder="Tell me about your inquiry..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-charcoal text-warm-white hover:bg-charcoal/90 transition-colors font-medium rounded"
                                >
                                    {t('contact.sendMessage')}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="bg-charcoal text-warm-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('contact.followTitle')}</h2>
                    <p className="text-warm-white/80 mb-6">
                        {t('contact.followText')}
                    </p>
                    <a
                        href="https://instagram.com/pierre_banwarth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-warm-white font-semibold hover:text-warm-white/70 transition-colors text-lg"
                    >
                        @pierre_banwarth →
                    </a>
                </div>
            </section>
        </div>
    );
}
