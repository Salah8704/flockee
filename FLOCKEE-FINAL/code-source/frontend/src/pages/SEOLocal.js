import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

const SEOLocal = () => {
  const { location } = useParams();

  const seoPages = {
    'paris': {
      title: 'Vélo électrique livraison restaurant Paris',
      description: 'Flockee propose des vélos électriques professionnels pour la livraison des restaurants à Paris. Solution robuste, personnalisable et adaptée aux flottes de livraison.'
    },
    'ile-de-france': {
      title: 'Vélo livraison restaurant Île-de-France',
      description: 'Équipez votre restaurant en Île-de-France avec les vélos électriques professionnels Flockee. Testés en conditions réelles, personnalisables et économiques.'
    },
    'flotte': {
      title: 'Flotte vélo livraison restaurant Paris',
      description: 'Gestion de flottes de vélos électriques pour restaurants, dark kitchens et franchises à Paris. Tarifs dégressifs et support dédié.'
    },
    'solution': {
      title: 'Solution livraison restaurant Paris',
      description: 'La solution de livraison la plus économique pour les restaurants parisiens. Vélos électriques Flockee : pas de carburant, compatible ZFE, plus rapide en ville.'
    },
    'comparatif': {
      title: 'Scooter vs vélo livraison restaurant',
      description: 'Comparatif détaillé : vélo électrique vs scooter pour la livraison de restaurant. Économisez jusqu\'à 4 000€ par an avec Flockee.'
    }
  };

  const currentPage = seoPages[location] || seoPages['paris'];

  const parisDistricts = [
    '1er arrondissement', '2e arrondissement', '3e arrondissement', '4e arrondissement',
    '5e arrondissement', '6e arrondissement', '7e arrondissement', '8e arrondissement',
    '9e arrondissement', '10e arrondissement', '11e arrondissement', '12e arrondissement',
    '13e arrondissement', '14e arrondissement', '15e arrondissement', '16e arrondissement',
    '17e arrondissement', '18e arrondissement', '19e arrondissement', '20e arrondissement'
  ];

  const idfCities = [
    'Boulogne-Billancourt', 'Montreuil', 'Saint-Denis', 'Nanterre', 'Créteil',
    'Argenteuil', 'Levallois-Perret', 'Issy-les-Moulineaux', 'Neuilly-sur-Seine',
    'Vincennes', 'Clichy', 'Courbevoie', 'Versailles', 'Rueil-Malmaison'
  ];

  return (
    <div data-testid="seo-local-page" className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <MapPin className="w-5 h-5 text-[#27AAE1]" />
              <span className="text-sm font-semibold text-gray-700">
                {location === 'ile-de-france' ? 'Île-de-France' : 'Paris'}
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
              {currentPage.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentPage.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/devis" className="btn-primary text-center">
              Demander un devis
            </Link>
            <Link to="/tarifs" className="btn-outline text-center">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* Local Coverage */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Nous couvrons <span className="gradient-text">tout Paris et l'Île-de-France</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Paris Districts */}
            <div className="bg-gradient-to-br from-[#f7fff7] to-white p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-[#27AAE1]" />
                <span>Paris - Tous arrondissements</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {parisDistricts.map((district, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#27AAE1]"></div>
                    <span className="text-sm text-gray-700">{district}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IDF Cities */}
            <div className="bg-gradient-to-br from-[#f7fff7] to-white p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-[#2BB673]" />
                <span>Île-de-France - Principales villes</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {idfCities.map((city, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2BB673]"></div>
                    <span className="text-sm text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Et bien d'autres villes de la région parisienne...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits for Local */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Pourquoi Flockee pour votre restaurant parisien ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🛫</div>
              <h3 className="text-xl font-bold mb-2">Zones ZFE</h3>
              <p className="text-gray-600">
                Paris et l'Île-de-France étendent constamment leurs zones à faibles émissions. 
                Le vélo électrique reste toujours autorisé.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-2">Circulation dense</h3>
              <p className="text-gray-600">
                En heure de pointe à Paris, le vélo est souvent 2 fois plus rapide qu'une voiture. 
                Livrez plus vite, plus souvent.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Économies garanties</h3>
              <p className="text-gray-600">
                Économisez jusqu'à 4 000€ par an et par vélo par rapport à un scooter thermique. 
                Coûts prévisibles et maîtrisés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Keywords */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#f7fff7] to-white p-8 lg:p-12 rounded-3xl border border-gray-100">
            <h2 className="font-heading text-2xl sm:text-3xl mb-6 text-center">
              Solution complète pour la livraison de restaurant à Paris
            </h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
              <p>
                <strong>Flockee</strong> est le spécialiste du <strong>vélo électrique professionnel pour la livraison de restaurant</strong> à Paris et en Île-de-France. 
                Nos <strong>vélos de livraison</strong> sont spécifiquement conçus pour répondre aux défis de la <strong>livraison urbaine</strong> dans la capitale française.
              </p>
              <p>
                Que vous soyez un <strong>restaurant indépendant</strong>, une <strong>dark kitchen</strong>, ou une <strong>franchise</strong>, 
                nous proposons des <strong>flottes de vélos électriques</strong> adaptées à votre volume d'activité. 
                Notre offre inclut l'<strong>achat</strong>, la <strong>location longue durée (LLD)</strong> avec ou sans services, et la <strong>personnalisation</strong> complète aux couleurs de votre marque.
              </p>
              <p>
                Avec des <strong>tarifs à partir de 45,63 € HT par mois</strong>, le <strong>vélo électrique Flockee</strong> est jusqu'à <strong>80% moins cher</strong> qu'un scooter thermique. 
                Plus de carburant, plus de permis, et un accès total aux <strong>zones ZFE de Paris</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl mb-6">
            Prêt à équiper votre restaurant ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez les restaurants parisiens qui ont choisi Flockee pour leurs livraisons.
          </p>
          <Link to="/devis" className="inline-flex items-center space-x-2 rounded-full px-8 py-4 font-semibold bg-white text-[#27AAE1] hover:bg-gray-100 transition-all shadow-lg">
            <span>Demander un devis gratuit</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SEOLocal;