import { useState, useEffect } from 'react';
import { Instagram, MapPin, Clock, Phone, Menu, X } from 'lucide-react';
import { menuData } from './data';

function Version1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'viennoiserie' | 'patisserie' | 'articlesSales' | 'plateaux'>('viennoiserie');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-900 selection:bg-brand-900 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="Maison Gougou" className={`h-12 md:h-16 w-auto transition-all ${scrolled ? 'invert brightness-0' : 'invert brightness-0'}`} style={{ filter: 'invert(1) brightness(200%)' }} />
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-12">
              <a href="#accueil" className="text-white hover:text-gray-300 text-xs font-semibold tracking-[0.2em] uppercase transition-colors">Accueil</a>
              <a href="#art" className="text-white hover:text-gray-300 text-xs font-semibold tracking-[0.2em] uppercase transition-colors">À Propos</a>
              <a href="#menu-1" className="text-white hover:text-gray-300 text-xs font-semibold tracking-[0.2em] uppercase transition-colors">Menu</a>
              <a href="#contact" className="text-white hover:text-gray-300 text-xs font-semibold tracking-[0.2em] uppercase transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="px-4 pt-4 pb-6 space-y-4 text-center">
              <a href="#accueil" onClick={() => setIsMenuOpen(false)} className="block text-sm font-semibold tracking-widest uppercase text-white">Accueil</a>
              <a href="#art" onClick={() => setIsMenuOpen(false)} className="block text-sm font-semibold tracking-widest uppercase text-white">À Propos</a>
              <a href="#menu-1" onClick={() => setIsMenuOpen(false)} className="block text-sm font-semibold tracking-widest uppercase text-white">Menu</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-sm font-semibold tracking-widest uppercase text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80')" }}
        ></div>
        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto mt-20">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight shadow-sm">
            Fait avec amour
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Une gamme très vaste, un multichoix de goûts et un très bon service. Découvrez nos créations uniques et nos classiques revisités dans un cadre moderne.
          </p>
          <a href="#menu-1" className="inline-block border border-white text-white px-10 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
            Notre Menu
          </a>
        </div>
      </section>

      {/* Art of Cakes Section */}
      <section id="art" className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 px-4 lg:px-12 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-4">L'art de la pâtisserie</h2>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-8">Nous créons de délicieux souvenirs</p>
              
              <p className="text-gray-600 mb-10 font-light leading-relaxed">
                Située au cœur de Casablanca (Hay Raja 1), Maison Gougou est une pâtisserie artisanale dédiée à la création de douceurs d'exception. Notre vitrine vous propose chaque jour une grande variété de pâtisseries, gâteaux, viennoiseries et créations salées.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 border-t border-b border-gray-200 py-6">
                <span className="font-serif italic text-gray-500">Chef</span>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-900 bg-gray-100">
                  <img src="/chef-simo.png" alt="Chef Simo" className="w-full h-full object-cover object-top" />
                </div>
                <span className="font-serif italic text-gray-500">Simo</span>
              </div>
              
              <div className="mt-8">
                <p className="text-2xl font-serif text-brand-900 italic">"Des créations uniques pour des occasions uniques."</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4 p-4 bg-white shadow-xl">
                <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80" alt="Cake" className="w-full h-48 md:h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&q=80" alt="Ingredients" className="w-full h-48 md:h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80" alt="Cake Slice" className="w-full h-48 md:h-64 object-cover" />
                <div className="bg-brand-900 flex items-center justify-center text-center p-6">
                  <p className="text-white font-serif text-2xl md:text-3xl">TELLEMENT<br/>BON !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section with Background */}
      <section className="relative py-32 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80')" }}
        ></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="bg-white p-2 md:p-4 shadow-2xl flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&q=80" alt="Pastry" className="w-full h-64 md:h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-serif text-brand-900 mb-2">Pâtisserie Fine</h2>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-500 mb-6">Nos favoris</p>
              <p className="text-gray-600 mb-8 font-light leading-relaxed">
                Que vous cherchiez un Pain Suisse réconfortant, un de nos fameux New-York Rolls, ou un magnifique Entremets pour une occasion spéciale, nous avons ce qu'il vous faut.
              </p>
              <div className="flex space-x-1 text-brand-900">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section (Clean & Minimalist Tabbed) */}
      <section id="menu-1" className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-4">Notre Menu</h2>
            <div className="w-24 h-px bg-brand-900 mx-auto opacity-30 mb-12"></div>
            
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-16">
              {[
                { id: 'viennoiserie', label: 'Viennoiserie' },
                { id: 'patisserie', label: 'Pâtisserie' },
                { id: 'articlesSales', label: 'Articles Salés' },
                { id: 'plateaux', label: 'Plateaux' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`text-sm sm:text-base tracking-[0.2em] uppercase transition-all duration-300 pb-2 border-b-2 ${
                    activeTab === tab.id
                      ? 'border-brand-900 text-brand-900 font-semibold'
                      : 'border-transparent text-gray-400 hover:text-brand-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-6">
            {menuData[activeTab].map((item, idx) => (
              <div key={idx} className="flex justify-between items-start border-b border-gray-200 pb-4 hover:border-brand-400 transition-colors">
                <div className="flex flex-col pr-4">
                  <span className="font-serif text-lg text-brand-900">{item.name}</span>
                  {(activeTab === 'viennoiserie' || activeTab === 'patisserie') && (
                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                      {activeTab === 'viennoiserie' ? 'Fait maison' : 'Spécialité du chef'}
                    </span>
                  )}
                </div>
                <span className="font-serif text-lg text-brand-700 whitespace-nowrap">{item.price.includes('DH') ? item.price : `${item.price} DH`}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <a href="#contact" className="inline-block border border-brand-900 text-brand-900 px-10 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-brand-900 hover:text-white transition-colors">
                Passer une commande
             </a>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#1a1a1a] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
             <img src="/logo.png" alt="Maison Gougou" className="h-20 mb-8" style={{ filter: 'invert(1) brightness(200%)' }} />
             <div className="flex space-x-6 text-sm font-semibold tracking-widest uppercase text-gray-400">
               <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
               <a href="#art" className="hover:text-white transition-colors">À Propos</a>
               <a href="#menu-1" className="hover:text-white transition-colors">Menu</a>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-gray-800 pt-12">
            <div>
              <h4 className="font-serif text-xl mb-6 text-[#d4af37]">Nous trouver</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                N 95, Hay Raja 1, <br/>Av. Said Abou Jemaa, <br/>Casablanca
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-xl mb-6 text-[#d4af37]">Contact</h4>
              <p className="text-gray-400 font-light leading-relaxed mb-4">
                Téléphone: <br/>06 61 17 80 24
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/maison.gougou/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <div className="md:text-right">
              <h4 className="font-serif text-xl mb-6 text-[#d4af37]">Horaires</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Lundi - Dimanche<br/>
                06:00 - Fermeture
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16 text-xs tracking-widest text-gray-600 uppercase">
            &copy; {new Date().getFullYear()} Maison Gougou. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Version1;
