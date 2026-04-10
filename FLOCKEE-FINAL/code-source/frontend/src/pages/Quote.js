import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Send, CheckCircle } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Quote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    restaurant_name: '',
    city: '',
    bike_count: 1,
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(`${API}/quote-request`, formData);
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      console.error('Quote request error:', err);
      setError('Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="font-heading text-4xl mb-4">Demande envoyée avec succès !</h1>
          <p className="text-lg text-gray-600 mb-6">
            Merci pour votre demande. Notre équipe vous contactera sous 24 heures.
          </p>
          <p className="text-sm text-gray-500">
            Redirection vers la page d'accueil...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="quote-page" className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            Demander un <span className="gradient-text">devis gratuit</span>
          </h1>
          <p className="text-xl text-gray-600">
            Remplissez ce formulaire et notre équipe vous contactera sous 24 heures pour établir un devis personnalisé.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Restaurant Name */}
              <div>
                <label htmlFor="restaurant_name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom du restaurant *
                </label>
                <input
                  type="text"
                  id="restaurant_name"
                  name="restaurant_name"
                  data-testid="restaurant-name-input"
                  value={formData.restaurant_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#27AAE1] focus:ring-2 focus:ring-[#27AAE1]/20 transition-colors"
                  placeholder="Le nom de votre établissement"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ville *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  data-testid="city-input"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#27AAE1] focus:ring-2 focus:ring-[#27AAE1]/20 transition-colors"
                  placeholder="Paris, Boulogne-Billancourt, etc."
                />
              </div>

              {/* Bike Count */}
              <div>
                <label htmlFor="bike_count" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre de vélos souhaités *
                </label>
                <select
                  id="bike_count"
                  name="bike_count"
                  data-testid="bike-count-select"
                  value={formData.bike_count}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#27AAE1] focus:ring-2 focus:ring-[#27AAE1]/20 transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} vélo{num > 1 ? 's' : ''}</option>
                  ))}
                  <option value="11">Plus de 10 vélos</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  data-testid="email-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#27AAE1] focus:ring-2 focus:ring-[#27AAE1]/20 transition-colors"
                  placeholder="votre.email@restaurant.fr"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  data-testid="phone-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#27AAE1] focus:ring-2 focus:ring-[#27AAE1]/20 transition-colors"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  data-testid="message-input"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#27AAE1] focus:ring-2 focus:ring-[#27AAE1]/20 transition-colors resize-none"
                  placeholder="Détails sur vos besoins, vos questions, ou informations complémentaires..."
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                data-testid="submit-quote-button"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Envoyer ma demande</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par Flockee concernant votre demande.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="font-bold text-lg mb-4">Vous préférez nous appeler ?</h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Email :</strong>{' '}
                <a href="mailto:contact@flockee.fr" className="text-[#27AAE1] hover:underline">
                  contact@flockee.fr
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Téléphone :</strong>{' '}
                <a href="tel:+33745259508" className="text-[#27AAE1] hover:underline">
                  +33 7 45 25 95 08
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;