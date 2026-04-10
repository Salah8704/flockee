import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-[#191919] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading text-xl mb-4 gradient-text">FLOCKEE</h3>
            <p className="text-gray-400 text-sm">
              Vélos électriques professionnels pour la livraison des restaurants à Paris et en Île-de-France.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/velo-flockee" className="text-gray-400 hover:text-[#27AAE1] transition-colors">Le vélo</Link></li>
              <li><Link to="/personnalisation" className="text-gray-400 hover:text-[#27AAE1] transition-colors">Personnalisation</Link></li>
              <li><Link to="/tarifs" className="text-gray-400 hover:text-[#27AAE1] transition-colors">Tarifs</Link></li>
              <li><Link to="/flottes" className="text-gray-400 hover:text-[#27AAE1] transition-colors">Flottes</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/avantages" className="text-gray-400 hover:text-[#27AAE1] transition-colors">Avantages</Link></li>
              <li><Link to="/comparatif" className="text-gray-400 hover:text-[#27AAE1] transition-colors">Comparatif</Link></li>
              <li><Link to="/devis" className="text-gray-400 hover:text-[#27AAE1] transition-colors">Demander un devis</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <a href="mailto:contact@flockee.fr" className="hover:text-[#27AAE1] transition-colors">contact@flockee.fr</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <a href="tel:+33745259508" className="hover:text-[#27AAE1] transition-colors">+33 7 45 25 95 08</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Paris, Île-de-France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Flockee. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;