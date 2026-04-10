import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Check } from 'lucide-react';
import SEO from '../components/SEO';

const LocalSEO = () => {
  const { location } = useParams();

  const locationsData = {
    'paris-1er': {
      name: '1er arrondissement',
      title: 'Vélo électrique livraison restaurant Paris 1er | Flockee',
      description: 'Livraison vélo électrique pour restaurants dans le 1er arrondissement de Paris. Louvre, Châtelet, Les Halles. Flotte Flockee professionnelle.',
      keywords: 'vélo électrique livraison Paris 1er, restaurant Louvre, livraison Châtelet, vélo professionnel Paris centre',
      neighborhoods: ['Louvre', 'Châtelet', 'Les Halles', 'Palais-Royal', 'Place Vendôme'],
      zipCode: '75001'
    },
    'paris-2e': {
      name: '2e arrondissement',
      title: 'Vélo électrique livraison restaurant Paris 2e | Flockee',
      description: 'Vélo électrique pour livraison de restaurant dans le 2e arrondissement. Bourse, Sentier, Montorgueil. Solution Flockee adaptée.',
      keywords: 'vélo livraison Paris 2e, restaurant Sentier, Montorgueil livraison, vélo Bourse Paris',
      neighborhoods: ['Bourse', 'Sentier', 'Montorgueil', 'Grands Boulevards'],
      zipCode: '75002'
    },
    'paris-3e': {
      name: '3e arrondissement',
      title: 'Vélo électrique livraison restaurant Paris 3e | Flockee',
      description: 'Livraison restaurant vélo électrique Paris 3e. Marais Nord, Arts et Métiers, Temple. Flotte vélo Flockee professionnelle.',
      keywords: 'vélo électrique Paris 3e, livraison Marais, restaurant Arts et Métiers, vélo Temple Paris',
      neighborhoods: ['Marais Nord', 'Arts et Métiers', 'Temple', 'Archives'],
      zipCode: '75003'
    },
    'paris-11e': {
      name: '11e arrondissement',
      title: 'Vélo électrique livraison restaurant Paris 11e | Flockee',
      description: 'Vélos électriques livraison restaurant Paris 11e. Bastille, Oberkampf, République. Solution Flockee pour dark kitchen et restaurants.',
      keywords: 'vélo électrique Paris 11e, livraison Bastille, Oberkampf restaurant, République vélo',
      neighborhoods: ['Bastille', 'Oberkampf', 'République', 'Nation', 'Voltaire'],
      zipCode: '75011'
    },
    'boulogne-billancourt': {
      name: 'Boulogne-Billancourt',
      title: 'Vélo électrique livraison restaurant Boulogne-Billancourt | Flockee',
      description: 'Flotte vélo électrique pour restaurants à Boulogne-Billancourt. Solution professionnelle Flockee adaptée aux Hauts-de-Seine.',
      keywords: 'vélo électrique Boulogne, livraison restaurant 92, Boulogne-Billancourt vélo, flotte Hauts-de-Seine',
      neighborhoods: ['Centre-ville', 'Marcel Sembat', 'Billancourt', 'Pont de Sèvres'],
      zipCode: '92100',
      department: 'Hauts-de-Seine'
    },
    'saint-denis': {
      name: 'Saint-Denis',
      title: 'Vélo électrique livraison restaurant Saint-Denis | Flockee',
      description: 'Vélos électriques professionnels pour livraison restaurant à Saint-Denis. Solution Flockee pour Seine-Saint-Denis.',
      keywords: 'vélo électrique Saint-Denis, livraison restaurant 93, vélo Seine-Saint-Denis, Flockee Saint-Denis',
      neighborhoods: ['Centre-ville', 'Stade de France', 'Pleyel', 'Basilique'],
      zipCode: '93200',
      department: 'Seine-Saint-Denis'
    }
  };

  // Données par défaut si la location n'est pas trouvée
  const defaultData = {
    name: 'Paris et Île-de-France',
    title: 'Vélo électrique livraison restaurant Paris Île-de-France | Flockee',
    description: 'Flockee propose des vélos électriques professionnels pour la livraison des restaurants à Paris et en Île-de-France.',
    keywords: 'vélo électrique livraison, restaurant Paris, vélo professionnel, flotte livraison',
    neighborhoods: [],
    zipCode: '75000'
  };

  const locationData = locationsData[location] || defaultData;

  const advantages = [
    'Livraison rapide en zone urbaine dense',
    'Pas de restriction ZFE',
    'Stationnement facile',
    'Coûts réduits vs scooter',
    'Image écologique positive',
    'Maintenance simplifiée'
  ];

  return (
    <>
      <SEO
        title={locationData.title}
        description={locationData.description}
        keywords={locationData.keywords}
        canonical={`/${location}`}
        localBusiness={true}
        location={locationData.name}
      />
      
      <div data-testid="local-seo-page" className="pt-20">
        {/* Hero Local */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                <MapPin className="w-5 h-5 text-[#27AAE1]" />
                <span className="text-sm font-semibold text-gray-700">
                  {locationData.name} - {locationData.zipCode}
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
                Vélos électriques <span className="gradient-text">professionnels</span> pour la livraison
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Équipez votre restaurant dans le <strong>{locationData.name}</strong> avec les vélos électriques Flockee. 
                Solution adaptée aux contraintes de livraison urbaine à Paris et en Île-de-France.
              </p>
              {locationData.neighborhoods && locationData.neighborhoods.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {locationData.neighborhoods.map((neighborhood, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-[#27AAE1]/20 rounded-full text-sm text-gray-700">
                      {neighborhood}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/devis" data-testid="local-cta-button" className="btn-primary text-center">
                Demander un devis gratuit
              </Link>
              <Link to="/tarifs" className="btn-outline text-center">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </section>

        {/* Spécificités locales */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
              Pourquoi Flockee dans le <span className="gradient-text">{locationData.name}</span> ?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://customer-assets.emergentagent.com/job_velo-pro/artifacts/dot9tsdv_ChatGPT%20Image%2014%20fe%CC%81vr.%202026%20a%CC%80%2017_51_59.png"
                  alt={`Vélo Flockee livraison ${locationData.name}`}
                  className="rounded-3xl shadow-2xl"
                />
              </div>

              <div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    Le <strong>{locationData.name}</strong> présente des défis spécifiques pour la livraison de restaurant : 
                    circulation dense, stationnement difficile, et zones à faibles émissions. Le vélo électrique Flockee 
                    est la solution idéale pour ces contraintes urbaines.
                  </p>

                  <div className="space-y-3 mb-8">
                    {advantages.map((advantage, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-6 h-6 text-[#2BB673] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-[#f7fff7] to-white p-6 rounded-2xl border border-[#27AAE1]/20">
                    <h3 className="font-bold text-xl mb-2">Intervention rapide</h3>
                    <p className="text-gray-700 mb-4">
                      Notre équipe intervient rapidement sur {locationData.name} et toute l'Île-de-France 
                      pour la livraison, l'installation et la maintenance de votre flotte de vélos électriques.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-[#27AAE1]" />
                        <a href="tel:+33745259508" className="text-[#27AAE1] hover:underline">+33 7 45 25 95 08</a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-[#27AAE1]" />
                        <a href="mailto:contact@flockee.fr" className="text-[#27AAE1] hover:underline">contact@flockee.fr</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu SEO riche */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-lg">
              <h2 className="font-heading text-2xl sm:text-3xl mb-6">
                Vélo électrique professionnel pour restaurant {locationData.name}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  <strong>Flockee</strong> est le spécialiste du <strong>vélo électrique professionnel pour la livraison de restaurant</strong> dans 
                  le {locationData.name} et dans toute l'<strong>Île-de-France</strong>. Nos <strong>vélos de livraison électriques</strong> sont 
                  spécifiquement conçus pour répondre aux besoins des <strong>restaurants</strong>, <strong>dark kitchens</strong> et 
                  <strong>franchises de restauration</strong>.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Solution complète de livraison vélo {locationData.name}</h3>
                <p>
                  Notre offre comprend la <strong>vente</strong>, la <strong>location longue durée (LLD)</strong> et la <strong>location avec services</strong> de 
                  vélos électriques professionnels. Que vous exploitiez un restaurant traditionnel, une dark kitchen ou une chaîne de restauration dans 
                  le {locationData.name}, nous avons la solution adaptée à votre volume d'activité.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Caractéristiques vélo Flockee Delivery Bike</h3>
                <ul className="space-y-2">
                  <li>✓ <strong>Batterie Li-Ion 21 Ah</strong> : jusqu'à 100 km d'autonomie pour couvrir tout le {locationData.name}</li>
                  <li>✓ <strong>Transmission par courroie</strong> : maintenance réduite, idéal pour usage intensif</li>
                  <li>✓ <strong>Pneus anti-crevaison renforcés</strong> : sécurité maximale en livraison urbaine</li>
                  <li>✓ <strong>Cadre robuste professionnel</strong> : testé 2 ans dans les rues de Paris</li>
                  <li>✓ <strong>Sac de livraison isotherme</strong> : maintien température des plats</li>
                  <li>✓ <strong>Personnalisation complète</strong> : aux couleurs de votre restaurant</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">Tarifs vélo électrique livraison {locationData.name}</h3>
                <p>
                  À partir de <strong>45,63 € HT par mois</strong> (sur 48 mois) ou <strong>2 190 € HT à l'achat</strong>. 
                  Nos <strong>tarifs dégressifs pour flottes</strong> permettent d'équiper plusieurs restaurants ou dark kitchens dans 
                  le {locationData.name} à coûts optimisés. Jusqu'à <strong>80% d'économies</strong> par rapport à un scooter thermique.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Zone ZFE et réglementation Paris</h3>
                <p>
                  Le {locationData.name} est situé en <strong>Zone à Faibles Émissions (ZFE)</strong>. Le vélo électrique Flockee bénéficie d'un 
                  <strong>accès illimité</strong> à toutes les zones, contrairement aux scooters thermiques de plus en plus restreints. 
                  Une solution pérenne pour votre activité de livraison.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Livraison et installation {locationData.name}</h3>
                <p>
                  Nous assurons la <strong>livraison rapide</strong> de votre flotte de vélos dans le {locationData.name}, 
                  la <strong>formation de vos équipes</strong> et le <strong>suivi maintenance</strong>. Service client dédié et 
                  intervention sous 24h en cas de besoin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 lg:py-32 gradient-bg text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl mb-6">
              Restaurant dans le {locationData.name} ? Équipez-vous avec Flockee
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez les restaurants du {locationData.name} qui ont choisi la solution vélo électrique Flockee.
            </p>
            <Link to="/devis" className="inline-flex items-center space-x-2 rounded-full px-8 py-4 font-semibold bg-white text-[#27AAE1] hover:bg-gray-100 transition-all shadow-lg">
              <span>Demander un devis pour {locationData.name}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LocalSEO;
