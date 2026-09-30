import { useState } from 'react';
import { Instagram, MapPin, Clock, Phone, Menu, X } from 'lucide-react';
import { menuData } from './data';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-50 font-sans text-brand-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="font-serif text-3xl font-bold text-brand-800">Maison Gougou</h1>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-brand-700 hover:text-brand-900 px-3 py-2 text-sm font-medium transition-colors">Accueil</a>
              <a href="#menu" className="text-brand-700 hover:text-brand-900 px-3 py-2 text-sm font-medium transition-colors">Menu</a>
              <a href="#a-propos" className="text-brand-700 hover:text-brand-900 px-3 py-2 text-sm font-medium transition-colors">À propos</a>
              <a href="#contact" className="text-brand-700 hover:text-brand-900 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-800 hover:text-brand-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-brand-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#accueil" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-800 hover:bg-brand-50">Accueil</a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-800 hover:bg-brand-50">Menu</a>
              <a href="#a-propos" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-800 hover:bg-brand-50">À propos</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-800 hover:bg-brand-50">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-20 lg:pt-0 lg:h-screen flex items-center relative overflow-hidden bg-brand-100">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
          {/* We can put a hero image here if they have one */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold text-brand-900">3.9</span>
                <span className="text-brand-600 text-sm">(70 avis)</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-900 mb-6 leading-tight">
                L'art de la pâtisserie <br/><span className="text-brand-600">à Casablanca</span>
              </h1>
              <p className="text-lg text-brand-700 mb-8 max-w-lg">
                Une gamme très vaste, un multichoix de goûts et un très bon service. Découvrez nos créations uniques et nos classiques revisités.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#menu" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-brand-800 hover:bg-brand-900 transition-colors">
                  Voir notre menu
                </a>
                <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 border-2 border-brand-800 text-base font-medium rounded-md text-brand-800 hover:bg-brand-50 transition-colors">
                  Nous trouver
                </a>
              </div>
            </div>
            
            {/* Quick Info Card */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl shadow-brand-900/5">
              <h3 className="text-2xl font-serif font-bold mb-6 border-b border-brand-100 pb-4">Informations</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="text-brand-600 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-brand-800">N 95, Hay Raja 1, Av. Said Abou Jemaa, Casablanca</span>
                </li>
                <li className="flex items-start">
                  <Clock className="text-brand-600 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-brand-800">Ouvert tous les jours <br/><span className="font-medium">06:00 - Fermeture</span></span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-brand-600 mt-1 mr-4 flex-shrink-0" />
                  <a href="tel:0661178024" className="text-brand-800 hover:text-brand-600 font-medium">06 61 17 80 24</a>
                </li>
                <li className="flex items-start">
                  <Instagram className="text-brand-600 mt-1 mr-4 flex-shrink-0" />
                  <a href="https://www.instagram.com/maison.gougou/?hl=en" target="_blank" rel="noopener noreferrer" className="text-brand-800 hover:text-brand-600 font-medium">@maison.gougou</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-900 mb-4">Notre Menu</h2>
            <p className="text-lg text-brand-600">Découvrez nos créations sucrées et salées, préparées avec passion tous les jours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Viennoiserie */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-brand-800 mb-8 pb-2 border-b-2 border-brand-200">Viennoiserie</h3>
              <ul className="space-y-4">
                {menuData.viennoiserie.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-end border-b border-brand-100 border-dashed pb-2">
                    <span className="font-medium text-brand-800">{item.name}</span>
                    <span className="font-bold text-brand-600 ml-4 whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Articles Salés */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-brand-800 mb-8 pb-2 border-b-2 border-brand-200">Articles Salés</h3>
              <ul className="space-y-4">
                {menuData.articlesSales.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-end border-b border-brand-100 border-dashed pb-2">
                    <span className="font-medium text-brand-800">{item.name}</span>
                    <span className="font-bold text-brand-600 ml-4 whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pâtisserie */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-brand-800 mb-8 pb-2 border-b-2 border-brand-200">Pâtisserie</h3>
              <ul className="space-y-4">
                {menuData.patisserie.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-end border-b border-brand-100 border-dashed pb-2">
                    <span className="font-medium text-brand-800">{item.name}</span>
                    <span className="font-bold text-brand-600 ml-4 whitespace-nowrap">{item.price} DH</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plateaux */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-brand-800 mb-8 pb-2 border-b-2 border-brand-200">Plateaux</h3>
              <ul className="space-y-4">
                {menuData.plateaux.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-end border-b border-brand-100 border-dashed pb-2">
                    <span className="font-medium text-brand-800">{item.name}</span>
                    <span className="font-bold text-brand-600 ml-4 whitespace-nowrap">{item.price} DH</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & About Section */}
      <section id="a-propos" className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-brand-900 mb-8">Ce que disent nos clients</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500 text-sm">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-brand-700 italic mb-4">"La qualité est parfaite, tout semble propre et le staff aussi professionnel et sympa par contre les prix sont un peu élevé mais on dirait c'est un bon rapport qualité prix 😊"</p>
                  <p className="font-medium text-brand-900">- Zainab Elfaij</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500 text-sm">
                      ★★★★☆
                    </div>
                  </div>
                  <p className="text-brand-700 italic mb-4">"Ok experience! The pâtisserie is clean, beautifully designed, and offers a great variety of pastries... everything looked delicious."</p>
                  <p className="font-medium text-brand-900">- Doha Moussamih</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500 text-sm">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-brand-700 italic mb-4">"Une gamme tres vaste multichoix de goût tres bon service bravo à toute ĺ equipe gougou sous la presidence du chef simo"</p>
                  <p className="font-medium text-brand-900">- Abderrahim Bousouif</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-serif font-bold text-brand-900 mb-8">À propos de Maison Gougou</h2>
              <div className="prose prose-brand text-brand-700">
                <p className="text-lg leading-relaxed mb-6">
                  Située au cœur de Casablanca (Hay Raja 1), Maison Gougou est une pâtisserie artisanale dédiée à la création de douceurs d'exception. Notre vitrine vous propose chaque jour une grande variété de pâtisseries, gâteaux, viennoiseries et créations salées.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Nous sommes ouverts dès 6h00 du matin pour vous accompagner du petit-déjeuner jusqu'au dessert. Que vous cherchiez un Pain Suisse réconfortant, un de nos fameux New-York Rolls, ou un magnifique Entremets pour une occasion spéciale, l'équipe du Chef Simo est là pour ravir vos papilles.
                </p>
                <div className="bg-white p-6 rounded-xl border border-brand-200 mt-8">
                  <h4 className="font-bold text-brand-900 text-xl mb-4">Spécialités</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm font-medium">Viennoiserie</span>
                    <span className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm font-medium">Entremets</span>
                    <span className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm font-medium">Plateaux Salés & Sucrés</span>
                    <span className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm font-medium">Macarons</span>
                    <span className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm font-medium">Gâteaux sur commande</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-brand-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Maison Gougou</h3>
              <p className="text-brand-300 mb-6">Pâtisserie artisanale à Casablanca. L'art du goût et de la tradition.</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/maison.gougou/?hl=en" target="_blank" rel="noopener noreferrer" className="text-brand-300 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-brand-300">
                <li className="flex items-start">
                  <MapPin size={20} className="mt-1 mr-3 flex-shrink-0" />
                  <span>N 95, Hay Raja 1, Av. Said Abou Jemaa, Casablanca</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 flex-shrink-0" />
                  <span>06 61 17 80 24</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Horaires</h4>
              <ul className="space-y-2 text-brand-300">
                <li className="flex justify-between">
                  <span>Lundi - Dimanche</span>
                  <span>06:00 - Fermeture</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-brand-800 mt-12 pt-8 text-center text-brand-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Maison Gougou. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
