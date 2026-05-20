'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Flame } from 'lucide-react';

const items = [
  {
    name: 'Margherita Pizza',
    desc: 'San Marzano tomato, fresh mozzarella, basil, olive oil.',
    price: '$14',
    rating: 4.9,
    tag: 'Popular',
    category: 'Mains',
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Truffle Burger',
    desc: 'Wagyu beef, brie, caramelized onion, black truffle aioli.',
    price: '$18',
    rating: 4.8,
    tag: 'Chef\'s Pick',
    category: 'Mains',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Creamy Carbonara',
    desc: 'Hand-cut pasta, guanciale, pecorino, farm-fresh yolk.',
    price: '$16',
    rating: 4.9,
    category: 'Mains',
    img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Garden Salad Bowl',
    desc: 'Heirloom greens, candied walnuts, goat cheese, citrus vinaigrette.',
    price: '$12',
    rating: 4.7,
    category: 'Starters',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Sushi Selection',
    desc: 'Chef\'s choice of nigiri & maki, freshly cut, ginger and wasabi.',
    price: '$24',
    rating: 4.9,
    tag: 'New',
    category: 'Mains',
    img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dry-Aged Ribeye',
    desc: '14oz prime ribeye, herb butter, roasted bone marrow.',
    price: '$36',
    rating: 5.0,
    tag: 'Hot',
    hot: true,
    category: 'Mains',
    img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Bruschetta Trio',
    desc: 'Tomato basil, mushroom truffle, and ricotta honey.',
    price: '$11',
    rating: 4.6,
    category: 'Starters',
    img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Molten Lava Cake',
    desc: 'Warm chocolate cake, vanilla bean gelato, gold flakes.',
    price: '$9',
    rating: 4.9,
    tag: 'Popular',
    category: 'Desserts',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Tiramisu Classico',
    desc: 'Espresso-soaked ladyfingers, mascarpone, cocoa dust.',
    price: '$8',
    rating: 4.8,
    category: 'Desserts',
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Berry Cheesecake',
    desc: 'New York style, fresh berry compote, crumble.',
    price: '$8',
    rating: 4.7,
    category: 'Desserts',
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Signature Latte',
    desc: 'Single-origin espresso, foamed oat milk, vanilla bean.',
    price: '$5',
    rating: 4.8,
    category: 'Drinks',
    img: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80&auto=format&fit=crop',
  },
  {
    name: 'Berry Smoothie',
    desc: 'Mixed berries, banana, almond milk, chia seeds.',
    price: '$7',
    rating: 4.7,
    category: 'Drinks',
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=800&q=80&auto=format&fit=crop',
  },
];

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

export default function Menu() {
  const [active, setActive] = useState('All');
  const filtered =
    active === 'All' ? items : items.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-24 bg-soft relative">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="eyebrow">What we serve</span>
          <h2 className="heading text-4xl sm:text-5xl">
            Crafted plates &amp; <span className="text-gradient">signature experiences.</span>
          </h2>
          <p className="text-soft mt-4">
            From everyday lunches to nights you'll remember — we've got a seat
            for every mood.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                active === cat ? 'text-white' : 'text-soft hover:text-[var(--text)]'
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="menu-tab"
                  className="absolute inset-0 rounded-full bg-brand-500 shadow-glow"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.article
                key={item.name}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -8 }}
                className="group card-surface ring-soft rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.tag && (
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
                        item.hot
                          ? 'bg-red-500/90 text-white'
                          : 'bg-white/90 text-brand-600'
                      } flex items-center gap-1`}
                    >
                      {item.hot && <Flame size={12} />}
                      {item.tag}
                    </span>
                  )}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
                    <Star size={11} fill="currentColor" className="text-yellow-400" />
                    {item.rating}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-serif text-xl font-bold leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-brand-500 font-bold text-lg whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-soft text-sm">{item.desc}</p>
                  <button className="mt-4 w-full py-2.5 rounded-xl bg-soft ring-soft font-semibold text-sm hover:bg-brand-500 hover:text-white hover:ring-brand-500 transition-all">
                    Add to Order
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
