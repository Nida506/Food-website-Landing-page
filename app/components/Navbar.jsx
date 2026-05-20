'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const offset = window.scrollY + 140;
      const ids = ['home', 'about', 'menu', 'contact'];
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'glass-strong shadow-soft border-b border-[var(--border)]' : 'glass'
      }`}
      style={{ height: 'var(--header-h)' }}
    >
      <div className="container-x h-full flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5">
          <motion.span
            whileHover={{ rotate: -8, scale: 1.05 }}
            className="grid place-items-center w-10 h-10 rounded-xl gradient-warm text-white font-serif text-lg shadow-glow"
          >
            S
          </motion.span>
          <span className="font-serif text-2xl font-bold">Savora</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 rounded-full text-sm font-medium text-soft hover:text-[var(--text)] transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-soft ring-soft"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.9, rotate: 180 }}
            className="w-11 h-11 grid place-items-center rounded-xl bg-soft ring-soft hover:text-brand-500 transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Sun size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Moon size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <a href="#contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm">
            Reserve
          </a>

          <button
            className="md:hidden w-11 h-11 grid place-items-center rounded-xl bg-soft ring-soft"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full inset-x-0 glass-strong border-b border-[var(--border)] shadow-soft"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-soft transition-colors font-medium"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
