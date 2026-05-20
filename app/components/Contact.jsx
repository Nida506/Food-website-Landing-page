'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const info = [
  { icon: MapPin, label: 'Visit', value: '123 Garden Street, Downtown' },
  { icon: Phone, label: 'Call', value: '+1 (555) 010-2345' },
  { icon: Mail, label: 'Email', value: 'hello@savora.example' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sun, 11am – 11pm' },
];

export default function Contact() {
  const [status, setStatus] = useState({ type: null, msg: '' });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get('name') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const message = (form.get('message') || '').toString().trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !message) {
      setStatus({ type: 'error', msg: 'Please fill in name, email and message.' });
      return;
    }
    if (!emailOk) {
      setStatus({ type: 'error', msg: 'That email doesn\'t look right.' });
      return;
    }

    setLoading(true);
    setStatus({ type: null, msg: '' });

    // Simulate API call — replace with real endpoint.
    await new Promise((r) => setTimeout(r, 900));

    setLoading(false);
    setStatus({
      type: 'success',
      msg: `Thanks, ${name.split(' ')[0]}! We'll be in touch shortly.`,
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Get in touch</span>
          <h2 className="heading text-4xl sm:text-5xl">
            Let's plan your <span className="text-gradient">next great meal.</span>
          </h2>
          <p className="text-soft mt-5 text-lg">
            Questions, reservations, or event inquiries — we usually reply
            within an hour.
          </p>

          <ul className="mt-8 grid gap-3">
            {info.map((it, idx) => (
              <motion.li
                key={it.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-soft ring-soft"
              >
                <div className="w-12 h-12 rounded-xl gradient-warm text-white grid place-items-center shrink-0 shadow-soft">
                  <it.icon size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">{it.label}</span>
                  <span className="text-sm text-muted-c">{it.value}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="card-surface ring-soft rounded-3xl p-8 shadow-soft"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your full name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Reservation, event, question…" />
          <Field
            label="Message"
            name="message"
            placeholder="Tell us a bit about what you need"
            textarea
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 w-full btn-primary disabled:opacity-60"
          >
            {loading ? (
              'Sending…'
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </motion.button>

          {status.type && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-center text-sm flex items-center justify-center gap-2 ${
                status.type === 'success' ? 'text-accent-500' : 'text-red-500'
              }`}
            >
              {status.type === 'success' && <CheckCircle2 size={16} />}
              {status.msg}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder, textarea }) {
  const base =
    'w-full bg-soft ring-soft rounded-xl px-4 py-3 font-medium placeholder:text-muted-c focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-0 transition-all';
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-wider text-muted-c">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={placeholder}
          className={`${base} resize-y`}
        />
      ) : (
        <input id={name} name={name} type={type} placeholder={placeholder} className={base} />
      )}
    </div>
  );
}
