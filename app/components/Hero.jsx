'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Utensils } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.2, 0.7, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-brand-300/30 dark:bg-brand-500/10 rounded-full blur-3xl animate-blob pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent-400/30 dark:bg-accent-500/15 rounded-full blur-3xl animate-blob pointer-events-none"
      />

      <div className="container-x relative grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow"
          >
            Fresh • Seasonal • Crafted
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="heading text-5xl sm:text-6xl lg:text-7xl"
          >
            A taste that{' '}
            <span className="text-gradient">feels like home.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-soft text-lg mt-6 max-w-xl"
          >
            Locally sourced ingredients, transformed into modern plates by chefs
            who care. Dine in, take out, or book your next event with us.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap gap-3 mt-8"
          >
            <a href="#menu" className="btn-primary group">
              Explore Menu
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a href="#contact" className="btn-ghost">Book a Table</a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex flex-wrap gap-10 mt-12 pt-8 border-t border-[var(--border)]"
          >
            <Stat value="12+" label="Years serving" />
            <Stat value="50k" label="Happy guests" />
            <Stat value="4.9★" label="Average rating" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.3, 1] }}
          className="relative aspect-square max-w-[520px] mx-auto lg:mx-0 lg:ml-auto w-full"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full gradient-warm blur-3xl opacity-40 animate-pulse" />

          {/* Main image */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative aspect-square rounded-full overflow-hidden shadow-glow ring-4 ring-white/40 dark:ring-white/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80&auto=format&fit=crop"
              alt="Signature dish"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
          </motion.div>

          {/* Floating badge — rating */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -left-4 sm:-left-10 top-12 card-surface ring-soft rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3 backdrop-blur-md"
          >
            <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-500 grid place-items-center">
              <Star size={20} fill="currentColor" />
            </div>
            <div>
              <div className="font-bold text-base">4.9 / 5.0</div>
              <div className="text-xs text-muted-c">2,400+ reviews</div>
            </div>
          </motion.div>

          {/* Floating badge — chef */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -right-2 sm:-right-6 bottom-16 card-surface ring-soft rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3 backdrop-blur-md"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-500 grid place-items-center">
              <Utensils size={18} />
            </div>
            <div>
              <div className="font-bold text-base">Chef's Pick</div>
              <div className="text-xs text-muted-c">Daily specials</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="flex flex-col">
      <span className="font-serif text-3xl font-bold">{value}</span>
      <span className="text-sm text-muted-c">{label}</span>
    </div>
  );
}
