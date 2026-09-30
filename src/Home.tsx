import { useState } from 'react';
import { Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { menuData } from './data';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Selected items for the premium product grid
  const premiumProducts = [
    { name: "Croissant aux Amandes", price: "8,00 DH", category: "Viennoiserie", img: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=600&q=80" },
    { name: "Entremets Tout Chocolat", price: "29,00 DH", category: "Pâtisserie", img: "https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=600&q=80" },
    { name: "Plateau Macaron", price: "350,00 DH", category: "Plateaux", img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80" },
    { name: "Quiche Saumon", price: "13,00 DH", category: "Salés", img: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=600&q=80" },
    { name: "Mini Plateau Donuts", price: "75,00 DH", category: "Plateaux", img: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&w=600&q=80" },
    { name: "Cake au Miel", price: "15,00 DH", category: "Pâtisserie", img: "https://images.unsplash.com/photo-1599819055803-717bba43890f?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-crave-orange selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="absolute w-full z-50 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="Maison Gougou" className="h-10 sm:h-12 w-auto invert brightness-0" style={{ filter: 'invert(1)' }} />
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center bg-white/10 px-6 lg:px-8 py-3 rounded-full backdrop-blur-sm border border-white/20">
              <a href="#home" className="text-white hover:text-crave-orange text-sm font-medium transition-colors">Accueil</a>
              <a href="#products" className="text-white hover:text-crave-orange text-sm font-medium transition-colors">Produits</a>
              <a href="#about" className="text-white hover:text-crave-orange text-sm font-medium transition-colors">À Propos</a>
              <a href="#menu" className="text-white hover:text-crave-orange text-sm font-medium transition-colors">Menu Complet</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white hover:text-crave-orange transition-colors">
                <ShoppingBag size={24} />
              </button>
              <a href="#contact" className="bg-crave-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg shadow-crave-orange/30">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button className="text-white">
                <ShoppingBag size={24} />
              </button>
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
          <div className="md:hidden bg-crave-brown absolute top-full left-0 w-full border-t border-white/10 shadow-xl pb-6">
            <div className="px-4 pt-4 space-y-4 text-center">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-white">Accueil</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-white">Produits</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-white">À Propos</a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-white">Menu Complet</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="inline-block bg-crave-orange text-white px-8 py-3 rounded-full mt-4">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 bg-crave-brown overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 opacity-10 hidden sm:block">
           <svg width="120" height="120" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left mt-8 lg:mt-0">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                <span className="text-crave-yellow">★</span>
                <span className="font-semibold text-white">3.9</span>
                <span className="text-white/80 text-sm">(70 avis)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Pâtisserie d'Exception, <br className="hidden sm:block" />
                <span className="text-crave-yellow font-serif italic block mt-2">Bouchée par Bouchée</span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
                Apportez de la joie avec nos délices faits maison. Des créations uniques pour des moments uniques au cœur de Casablanca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#products" className="inline-flex justify-center items-center px-8 py-4 bg-crave-orange text-white text-base font-medium rounded-full shadow-lg shadow-crave-orange/30 hover:bg-orange-600 transition-all hover:scale-105">
                  Commander
                </a>
                <a href="#menu" className="inline-flex justify-center items-center px-8 py-4 text-white text-base font-medium rounded-full hover:bg-white/10 transition-colors">
                  Voir le menu <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-crave-orange/20 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" 
                  alt="Croissants" 
                  className="relative z-10 w-full h-full object-cover rounded-[2rem] sm:rounded-[3rem] shadow-2xl border-4 border-white/10 transform sm:rotate-3 sm:hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Products Section */}
      <section id="products" className="py-16 sm:py-24 bg-crave-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-crave-brown mb-6">Nos Produits Premium</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-5 py-2 bg-crave-brown text-white rounded-full text-sm font-medium">Tout</button>
              <button className="px-5 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 shadow-sm border border-gray-100">Viennoiserie</button>
              <button className="px-5 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 shadow-sm border border-gray-100">Pâtisserie</button>
              <button className="px-5 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 shadow-sm border border-gray-100">Salés</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {premiumProducts.map((product, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="relative h-48 sm:h-64 mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-50">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-crave-brown">
                    {product.category}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-crave-brown mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-crave-orange font-bold text-lg sm:text-xl mb-4">{product.price}</p>
                  <button className="w-full py-2.5 sm:py-3 bg-gray-50 hover:bg-crave-orange hover:text-white text-crave-brown rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group-hover:shadow-md">
                    <ShoppingBag size={18} /> Ajouter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bite into our Best Section */}
      <section id="about" className="py-16 sm:py-24 bg-crave-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/40 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 border border-white/60 shadow-xl shadow-crave-yellow/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1556742059-47b93231f536?auto=format&fit=crop&w=800&q=80" 
                  alt="Baker" 
                  className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-[200px] sm:max-w-xs hidden sm:block">
                  <h4 className="font-bold text-crave-brown mb-1 sm:mb-2 text-sm sm:text-base">Fait Maison</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Préparé chaque matin avec passion et ingrédients frais.</p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-crave-brown mb-4 sm:mb-6 leading-tight">Croquez dans l'Excellence</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Notre équipe de passionnés s'engage à vous offrir une expérience gustative inoubliable. Chaque création est le fruit d'un savoir-faire artisanal et d'une sélection rigoureuse de nos ingrédients.
                </p>
                
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm mb-6 sm:mb-8 text-left inline-block w-full max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-crave-orange/10 rounded-full flex items-center justify-center text-crave-orange flex-shrink-0">
                      <span className="font-bold text-sm sm:text-base">SM</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-crave-brown text-sm sm:text-base">Chef Simo</h4>
                      <p className="text-xs sm:text-sm text-gray-500">Artisan Pâtissier</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600 text-sm sm:text-base">"La pâtisserie est un art qui se déguste d'abord avec les yeux, puis avec le cœur."</p>
                </div>

                <div className="text-center lg:text-left">
                  <a href="#menu" className="inline-block bg-crave-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-crave-orange/30 text-sm sm:text-base">
                    Découvrir notre histoire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu complet list */}
      <section id="menu" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-crave-brown mb-3 sm:mb-4">Menu Complet</h2>
            <p className="text-gray-600 text-sm sm:text-base">Toutes nos délices disponibles en boutique.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-x-16 sm:gap-y-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-crave-brown mb-6 flex items-center gap-3">
                <span className="w-6 sm:w-8 h-1 bg-crave-orange rounded-full"></span> Viennoiserie
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {menuData.viennoiserie.slice(0, 10).map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2 sm:pb-3">
                    <span className="font-medium text-gray-800 text-sm sm:text-base">{item.name}</span>
                    <span className="font-bold text-crave-orange bg-orange-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap ml-2">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-crave-brown mb-6 flex items-center gap-3">
                <span className="w-6 sm:w-8 h-1 bg-crave-orange rounded-full"></span> Pâtisserie
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {menuData.patisserie.slice(0, 10).map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2 sm:pb-3">
                    <span className="font-medium text-gray-800 text-sm sm:text-base">{item.name}</span>
                    <span className="font-bold text-crave-orange bg-orange-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap ml-2">{item.price} DH</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-crave-red pt-20 sm:pt-32 pb-8 sm:pb-12 relative overflow-hidden">
        {/* Floating elements top */}
        <div className="absolute top-0 left-0 w-full flex justify-around opacity-30 -translate-y-1/2 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=200&q=80" className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover hidden sm:block" alt="" />
           <img src="https://images.unsplash.com/photo-1534432182912-63863115e106?auto=format&fit=crop&w=200&q=80" className="w-40 h-40 sm:w-64 sm:h-64 rounded-full object-cover" alt="" />
           <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80" className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover hidden sm:block" alt="" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-center text-white mb-12 sm:mb-16 border border-white/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Prêt pour de délicieuses pâtisseries ?</h2>
            <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Rejoignez-nous en boutique pour déguster nos créations, ou passez commande par téléphone pour vos événements.
            </p>
            <a href="tel:0661178024" className="inline-block bg-white text-crave-red px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-crave-yellow transition-colors shadow-xl">
              06 61 17 80 24
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 text-white/90 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <img src="/logo.png" alt="Maison Gougou" className="h-12 sm:h-16 mb-4 sm:mb-6 invert brightness-0" style={{ filter: 'invert(1)' }} />
              <p className="font-light text-sm sm:text-base leading-relaxed">N 95, Hay Raja 1, <br/>Av. Said Abou Jemaa, Casablanca</p>
            </div>
            
            <div className="md:text-center">
              <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white">Liens Rapides</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li><a href="#home" className="hover:text-crave-yellow transition-colors">Accueil</a></li>
                <li><a href="#products" className="hover:text-crave-yellow transition-colors">Produits</a></li>
                <li><a href="#about" className="hover:text-crave-yellow transition-colors">À Propos</a></li>
              </ul>
            </div>
            
            <div className="md:text-right flex flex-col items-center sm:items-end">
              <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-white">Horaires</h4>
              <p className="font-light mb-4 sm:mb-6 text-sm sm:text-base text-center sm:text-right">Ouvert tous les jours<br/>06:00 - Fermeture</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/maison.gougou/?hl=en" className="bg-white/20 p-2 sm:p-3 rounded-full hover:bg-white hover:text-crave-red transition-all">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-white/60 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Maison Gougou. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
