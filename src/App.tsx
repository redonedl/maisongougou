import { useState } from 'react';
import { Instagram, MapPin, Clock, Phone, Menu, X } from 'lucide-react';
import { menuData } from './data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-900 selection:bg-brand-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="Maison Gougou - Pâtisserie Boulangerie" className="h-16 w-auto" />
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-12">
              <a href="#accueil" className="text-brand-600 hover:text-brand-900 py-2 text-sm font-medium tracking-widest uppercase transition-colors">Accueil</a>
              <a href="#menu" className="text-brand-600 hover:text-brand-900 py-2 text-sm font-medium tracking-widest uppercase transition-colors">Menu</a>
              <a href="#a-propos" className="text-brand-600 hover:text-brand-900 py-2 text-sm font-medium tracking-widest uppercase transition-colors">À propos</a>
              <a href="#contact" className="text-brand-600 hover:text-brand-900 py-2 text-sm font-medium tracking-widest uppercase transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-900 hover:text-brand-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-brand-100">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#accueil" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium tracking-widest uppercase text-brand-900">Accueil</a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium tracking-widest uppercase text-brand-900">Menu</a>
              <a href="#a-propos" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium tracking-widest uppercase text-brand-900">À propos</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium tracking-widest uppercase text-brand-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 lg:pt-24 lg:h-screen flex items-center relative overflow-hidden bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 border border-brand-200 px-4 py-2 rounded-full mb-8 bg-white">
                <span className="text-brand-900">★</span>
                <span className="font-semibold text-brand-900">3.9</span>
                <span className="text-brand-500 text-sm tracking-wider uppercase">(70 avis)</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-brand-900 mb-8 leading-tight">
                L'art de la pâtisserie <br/><span className="text-brand-500 italic">à Casablanca</span>
              </h1>
              <p className="text-lg text-brand-600 mb-10 max-w-lg font-light leading-relaxed">
                Une gamme très vaste, un multichoix de goûts et un très bon service. Découvrez nos créations uniques et nos classiques revisités dans un cadre moderne.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#menu" className="inline-flex justify-center items-center px-8 py-4 bg-brand-900 text-white text-sm font-medium tracking-widest uppercase hover:bg-brand-800 transition-colors">
                  Voir notre menu
                </a>
                <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 border border-brand-900 text-brand-900 text-sm font-medium tracking-widest uppercase hover:bg-brand-50 transition-colors">
                  Nous trouver
                </a>
              </div>
            </div>
            
            {/* Quick Info Card */}
            <div className="order-1 lg:order-2 bg-white p-10 lg:p-12 shadow-sm border border-brand-100">
              <h3 className="text-xl font-serif mb-8 border-b border-brand-200 pb-4 tracking-widest uppercase">Informations</h3>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <MapPin className="text-brand-900 mt-1 mr-6 flex-shrink-0" size={24} />
                  <span className="text-brand-600 font-light leading-relaxed">N 95, Hay Raja 1, <br/>Av. Said Abou Jemaa, Casablanca</span>
                </li>
                <li className="flex items-start">
                  <Clock className="text-brand-900 mt-1 mr-6 flex-shrink-0" size={24} />
                  <span className="text-brand-600 font-light leading-relaxed">Ouvert tous les jours <br/><span className="font-medium text-brand-900">06:00 - Fermeture</span></span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-brand-900 mt-1 mr-6 flex-shrink-0" size={24} />
                  <a href="tel:0661178024" className="text-brand-900 hover:text-brand-600 font-light tracking-wider">06 61 17 80 24</a>
                </li>
                <li className="flex items-start">
                  <Instagram className="text-brand-900 mt-1 mr-6 flex-shrink-0" size={24} />
                  <a href="https://www.instagram.com/maison.gougou/?hl=en" target="_blank" rel="noopener noreferrer" className="text-brand-900 hover:text-brand-600 font-light tracking-widest">@maison.gougou</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-4">Notre Menu</h2>
            <p className="text-4xl md:text-5xl font-serif text-brand-900">Des créations préparées avec passion tous les jours.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
            {/* Viennoiserie */}
            <div>
              <div className="flex items-center mb-12">
                <h3 className="text-2xl font-serif text-brand-900 tracking-widest uppercase">Viennoiserie</h3>
                <div className="h-px bg-brand-200 flex-grow ml-6"></div>
              </div>
              <ul className="space-y-6">
                {menuData.viennoiserie.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-baseline group">
                    <span className="font-light text-brand-700 tracking-wide">{item.name}</span>
                    <div className="border-b border-brand-200 flex-grow mx-4 border-dotted group-hover:border-brand-400 transition-colors"></div>
                    <span className="font-medium text-brand-900 whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Articles Salés */}
            <div>
              <div className="flex items-center mb-12">
                <h3 className="text-2xl font-serif text-brand-900 tracking-widest uppercase">Articles Salés</h3>
                <div className="h-px bg-brand-200 flex-grow ml-6"></div>
              </div>
              <ul className="space-y-6">
                {menuData.articlesSales.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-baseline group">
                    <span className="font-light text-brand-700 tracking-wide">{item.name}</span>
                    <div className="border-b border-brand-200 flex-grow mx-4 border-dotted group-hover:border-brand-400 transition-colors"></div>
                    <span className="font-medium text-brand-900 whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pâtisserie */}
            <div>
              <div className="flex items-center mb-12">
                <h3 className="text-2xl font-serif text-brand-900 tracking-widest uppercase">Pâtisserie</h3>
                <div className="h-px bg-brand-200 flex-grow ml-6"></div>
              </div>
              <ul className="space-y-6">
                {menuData.patisserie.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-baseline group">
                    <span className="font-light text-brand-700 tracking-wide">{item.name}</span>
                    <div className="border-b border-brand-200 flex-grow mx-4 border-dotted group-hover:border-brand-400 transition-colors"></div>
                    <span className="font-medium text-brand-900 whitespace-nowrap">{item.price} DH</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plateaux */}
            <div>
              <div className="flex items-center mb-12">
                <h3 className="text-2xl font-serif text-brand-900 tracking-widest uppercase">Plateaux</h3>
                <div className="h-px bg-brand-200 flex-grow ml-6"></div>
              </div>
              <ul className="space-y-6">
                {menuData.plateaux.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-baseline group">
                    <span className="font-light text-brand-700 tracking-wide">{item.name}</span>
                    <div className="border-b border-brand-200 flex-grow mx-4 border-dotted group-hover:border-brand-400 transition-colors"></div>
                    <span className="font-medium text-brand-900 whitespace-nowrap">{item.price} DH</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & About Section */}
      <section id="a-propos" className="py-32 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-medium tracking-widest uppercase text-brand-400 mb-4">Avis Clients</h2>
              <h3 className="text-4xl font-serif mb-12 leading-tight">Ce que l'on dit de nous</h3>
              
              <div className="space-y-8">
                <div className="border-l-2 border-brand-700 pl-8 py-2">
                  <div className="flex items-center mb-4">
                    <div className="flex text-brand-100 text-xs tracking-widest">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-brand-200 font-serif italic text-xl leading-relaxed mb-6">"La qualité est parfaite, tout semble propre et le staff aussi professionnel et sympa par contre les prix sont un peu élevé mais on dirait c'est un bon rapport qualité prix."</p>
                  <p className="font-medium tracking-widest text-sm uppercase text-brand-400">- Zainab Elfaij</p>
                </div>

                <div className="border-l-2 border-brand-700 pl-8 py-2 mt-12">
                  <div className="flex items-center mb-4">
                    <div className="flex text-brand-100 text-xs tracking-widest">
                      ★★★★☆
                    </div>
                  </div>
                  <p className="text-brand-200 font-serif italic text-xl leading-relaxed mb-6">"Ok experience! The pâtisserie is clean, beautifully designed, and offers a great variety of pastries... everything looked delicious."</p>
                  <p className="font-medium tracking-widest text-sm uppercase text-brand-400">- Doha Moussamih</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-widest uppercase text-brand-400 mb-4">Notre Histoire</h2>
              <h3 className="text-4xl font-serif mb-12 leading-tight">L'excellence au quotidien</h3>
              <div className="space-y-8 text-brand-300 font-light leading-relaxed text-lg">
                <p>
                  Située au cœur de Casablanca (Hay Raja 1), Maison Gougou est une pâtisserie artisanale dédiée à la création de douceurs d'exception. Notre vitrine vous propose chaque jour une grande variété de pâtisseries, gâteaux, viennoiseries et créations salées.
                </p>
                <p>
                  Nous sommes ouverts dès 6h00 du matin pour vous accompagner du petit-déjeuner jusqu'au dessert. Que vous cherchiez un Pain Suisse réconfortant, un de nos fameux New-York Rolls, ou un magnifique Entremets pour une occasion spéciale, l'équipe du Chef Simo est là pour ravir vos papilles.
                </p>
                
                <div className="pt-8">
                  <h4 className="font-serif text-2xl text-white mb-6">Spécialités</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="border border-brand-700 px-4 py-2 text-sm tracking-widest uppercase hover:bg-brand-800 transition-colors cursor-default">Viennoiserie</span>
                    <span className="border border-brand-700 px-4 py-2 text-sm tracking-widest uppercase hover:bg-brand-800 transition-colors cursor-default">Entremets</span>
                    <span className="border border-brand-700 px-4 py-2 text-sm tracking-widest uppercase hover:bg-brand-800 transition-colors cursor-default">Plateaux Salés & Sucrés</span>
                    <span className="border border-brand-700 px-4 py-2 text-sm tracking-widest uppercase hover:bg-brand-800 transition-colors cursor-default">Macarons</span>
                    <span className="border border-brand-700 px-4 py-2 text-sm tracking-widest uppercase hover:bg-brand-800 transition-colors cursor-default">Gâteaux sur commande</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white text-brand-900 border-t border-brand-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-24">
            <div className="flex flex-col items-start">
              <img src="/logo.png" alt="Maison Gougou" className="h-16 mb-8" />
              <p className="text-brand-600 font-light mb-8 max-w-sm">Pâtisserie artisanale à Casablanca. L'art du goût et de la tradition dans un cadre contemporain.</p>
              <a href="https://www.instagram.com/maison.gougou/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-brand-900 hover:text-brand-500 transition-colors group">
                <Instagram size={20} />
                <span className="tracking-widest uppercase text-sm font-medium">Suivez-nous</span>
              </a>
            </div>
            
            <div className="md:mx-auto">
              <h4 className="font-medium text-brand-900 mb-8 tracking-widest uppercase text-sm">Contact</h4>
              <ul className="space-y-6 text-brand-600 font-light">
                <li className="flex items-start">
                  <MapPin size={20} className="mt-1 mr-4 flex-shrink-0 text-brand-900" />
                  <span>N 95, Hay Raja 1, <br/>Av. Said Abou Jemaa, <br/>Casablanca</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-4 flex-shrink-0 text-brand-900" />
                  <span className="tracking-wider">06 61 17 80 24</span>
                </li>
              </ul>
            </div>
            
            <div className="md:ml-auto">
              <h4 className="font-medium text-brand-900 mb-8 tracking-widest uppercase text-sm">Horaires</h4>
              <ul className="space-y-4 text-brand-600 font-light">
                <li className="flex justify-between items-center gap-12 border-b border-brand-100 pb-4">
                  <span>Lundi - Dimanche</span>
                  <span className="font-medium text-brand-900">06:00 - Fermeture</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-brand-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-500 text-sm font-light">&copy; {new Date().getFullYear()} Maison Gougou. Tous droits réservés.</p>
            <p className="text-brand-400 text-xs tracking-widest uppercase">Design Moderne</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
