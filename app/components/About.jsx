'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Award, Leaf, ChefHat, Heart } from 'lucide-react';

const features = [
  { icon: Leaf, text: 'Farm-to-table ingredients' },
  { icon: ChefHat, text: 'Award-winning chefs' },
  { icon: Heart, text: 'Vegetarian & vegan friendly' },
  { icon: Award, text: 'Private events & catering' },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop"
              alt="Inside Savora"
              fill
              sizes="(max-width: 1024px) 90vw, 500px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Decorative second image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden sm:block absolute -bottom-10 -right-6 w-44 h-44 rounded-3xl overflow-hidden ring-4 ring-[var(--bg)] shadow-soft"
          >
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80&auto=format&fit=crop"
              alt="Chef plating"
              fill
              sizes="200px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -top-6 -left-4 card-surface ring-soft rounded-2xl px-5 py-3 shadow-soft"
          >
            <div className="font-serif text-2xl font-bold">Since 2013</div>
            <div className="text-xs text-muted-c">Family owned</div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span variants={item} className="eyebrow">About Savora</motion.span>
          <motion.h2 variants={item} className="heading text-4xl sm:text-5xl">
            Food that tells a <span className="text-gradient">story.</span>
          </motion.h2>
          <motion.p variants={item} className="text-soft text-lg mt-5">
            What started as a small neighborhood kitchen has grown into one of
            the city's most-loved dining spots — without losing the warmth that
            started it all. Our chefs work with local farmers to design a
            seasonal menu that changes with the harvest.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 grid sm:grid-cols-2 gap-3"
          >
            {features.map((f) => (
              <div
                key={f.text}
                className="flex items-center gap-3 p-4 rounded-2xl bg-soft ring-soft"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-500 grid place-items-center shrink-0">
                  <f.icon size={18} />
                </div>
                <span className="font-medium text-sm">{f.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex gap-4">
            <a href="#menu" className="btn-primary">See the Menu</a>
            <a href="#contact" className="btn-ghost">Visit Us</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
