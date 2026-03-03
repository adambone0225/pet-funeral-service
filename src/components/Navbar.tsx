import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Heart, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';

const navLinks = [
  { name: '首頁', path: '/' },
  { name: '關於我們', path: '/about' },
  { name: '服務流程', path: '/service-flow' },
  { name: '價目表', path: '/pricing' },
  { name: '商品分類', path: '/products' },
  { name: '見證', path: '/testimonials' },
  { name: 'Q&A', path: '/faq' },
  { name: '聯絡我們', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-primary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <Heart className="h-8 w-8 fill-current" />
            <span className="font-serif text-2xl font-semibold tracking-wide text-text">寵返家嫏</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <div className="flex items-baseline space-x-4 lg:space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    clsx(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-text hover:text-primary hover:bg-primary/5'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-3 border-l border-primary/20 pl-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-text hover:bg-primary/10 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-primary/20"
          >
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      'block px-3 py-2 rounded-md text-base font-medium',
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-text hover:text-primary hover:bg-primary/5'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex items-center gap-4 px-3 pt-4 pb-2 border-t border-primary/10 mt-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
