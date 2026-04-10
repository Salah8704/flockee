import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building2, TrendingUp, Settings, Check } from 'lucide-react';

const Fleet = () => {
  const clientTypes = [
    {
      icon: <Users />,
      title: 'Restaurants indépendants',
      description: 'Équipez votre établissement avec une solution adaptée à votre volume de livraisons.'
    },
    {
      icon: <Building2 />,
      title: 'Dark kitchens',
      description: 'Optimisez vos coûts opérationnels avec une flotte électrique performante.'
    },
    {
      icon: <TrendingUp />,
      title: 'Franchises',
      description: 'Déployez une solution homogène sur plusieurs points de vente.'
    },
    {
      icon: <Settings />,
      title: 'Chaînes de restauration',
      description: 'Gestion centralisée de flotte avec support dédié.'
    }
  ];

  const fleetAdvantages = [
    {
      title: 'Gestion simplifiée',
      points: [
        'Un seul interlocuteur pour toute votre flotte',
        'Facturation centralisée',
        'Suivi et reporting détaillé',
        'Gestion des maintenances'
      ]
    },
    {
      title: 'Tarifs dégressifs',
      points: [
        'Réductions selon le volume',
        'Conditions préférentielles',
        'Options de financement flexibles',
        'Personnalisation à tarif préférentiel'
      ]
    },
    {
      title: 'Support prioritaire',
      points: [
        'Assistance dédiée',
        'Intervention rapide en cas de besoin',
        'Formation des équipes',
        'Vélos de remplacement disponibles'
      ]
    }
  ];

  return (
    <div data-testid="fleet-page" className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
              Flottes de vélos électriques pour <span className="gradient-text">restaurants</span> à Paris
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flockee accompagne les restaurants indépendants, dark kitchens, franchises et chaînes de restauration dans leur stratégie de livraison.
            </p>
          </div>

          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_velo-pro/artifacts/f7b8s60m_ChatGPT%20Image%2013%20fe%CC%81vr.%202026%20a%CC%80%2022_45_24.png"
              alt="Flotte de vélos Flockee"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Qui <span className="gradient-text">accompagnons-nous</span> ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((type, idx) => (
              <div key={idx} data-testid={`client-type-${idx}`} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Advantages */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Les avantages d'une <span className="gradient-text">flotte Flockee</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetAdvantages.map((advantage, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 gradient-text">{advantage.title}</h3>
                <ul className="space-y-3">
                  {advantage.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-[#2BB673] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Examples */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Exemples de <span className="gradient-text">configuration</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#f7fff7] to-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="text-sm text-gray-600 mb-2">Petit restaurant</div>
              <div className="text-4xl font-bold gradient-text mb-4">1-3 vélos</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Volume de livraison moyen</li>
                <li>• Zone de livraison localisée</li>
                <li>• Personnalisation partielle</li>
                <li>• À partir de 45 € HT/mois/vélo</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#27AAE1] to-[#2BB673] p-8 rounded-2xl text-white shadow-xl">
              <div className="text-sm opacity-90 mb-2">Restaurant actif / Dark kitchen</div>
              <div className="text-4xl font-bold mb-4">5-10 vélos</div>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Volume de livraison important</li>
                <li>• Plusieurs zones de livraison</li>
                <li>• Personnalisation complète</li>
                <li>• Tarifs dégressifs appliqués</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#f7fff7] to-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="text-sm text-gray-600 mb-2">Franchise / Chaîne</div>
              <div className="text-4xl font-bold gradient-text mb-4">10+ vélos</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Plusieurs établissements</li>
                <li>• Gestion centralisée</li>
                <li>• Image de marque unifiée</li>
                <li>• Conditions préférentielles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Comment ça <span className="gradient-text">fonctionne</span> ?
          </h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Analyse de vos besoins</h3>
                <p className="text-gray-600">
                  Nous échangeons sur votre activité, vos volumes de livraison, et vos objectifs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proposition personnalisée</h3>
                <p className="text-gray-600">
                  Nous vous proposons une solution adaptée avec devis détaillé incluant tarifs, personnalisation et services.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Déploiement de votre flotte</h3>
                <p className="text-gray-600">
                  Livraison, formation de vos équipes, et mise en service de votre flotte Flockee.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Accompagnement continu</h3>
                <p className="text-gray-600">
                  Support technique, maintenance, et ajustements selon l'évolution de votre activité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl mb-6">
            Prêt à équiper votre flotte ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discutons de votre projet et trouvons ensemble la solution idéale pour votre activité.
          </p>
          <Link to="/devis" data-testid="fleet-cta-button" className="inline-block rounded-full px-8 py-4 font-semibold bg-white text-[#27AAE1] hover:bg-gray-100 transition-all shadow-lg">
            Demander un devis pour ma flotte
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Fleet;