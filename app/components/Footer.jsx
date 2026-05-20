import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'Youtube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-soft border-t border-[var(--border)] pt-20 pb-6 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full gradient-warm blur-3xl opacity-5 pointer-events-none" />
      <div className="container-x relative grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid place-items-center w-10 h-10 rounded-xl gradient-warm text-white font-serif text-lg shadow-glow">
              S
            </span>
            <span className="font-serif text-2xl font-bold">Savora</span>
          </a>
          <p className="text-soft mt-4 max-w-xs">
            Fresh, seasonal cuisine — served with care since 2013. Locally
            sourced, beautifully plated.
          </p>
          <div className="flex gap-2 mt-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-xl ring-soft grid place-items-center hover:bg-brand-500 hover:text-white hover:ring-brand-500 transition-all"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Explore">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </FooterCol>

        <FooterCol title="Visit">
          <span>123 Garden Street</span>
          <span>Downtown, City</span>
          <span>+1 (555) 010-2345</span>
          <span>hello@savora.example</span>
        </FooterCol>

        <FooterCol title="Hours">
          <span>Mon–Thu · 11am – 10pm</span>
          <span>Fri–Sat · 11am – 11pm</span>
          <span>Sun · 12pm – 10pm</span>
        </FooterCol>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-[var(--border)] flex flex-wrap justify-between gap-2 text-sm text-muted-c">
        <span>© {new Date().getFullYear()} Savora. All rights reserved.</span>
        <span>Made with ♥ for food lovers.</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="text-sm uppercase tracking-[0.14em] font-bold mb-4">
        {title}
      </h4>
      <div className="flex flex-col gap-2.5 text-soft">
        {Array.isArray(children) ? (
          children.map((c, i) => (
            <span key={i} className="hover:text-brand-500 transition-colors">
              {c}
            </span>
          ))
        ) : (
          <span className="hover:text-brand-500 transition-colors">{children}</span>
        )}
      </div>
    </div>
  );
}
