import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, TrendingUp, MapPin, Wrench, DollarSign, Wind, Clock } from 'lucide-react';

const Advantages = () => {
  const mainAdvantages = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Pas de carburant',
      description: 'Éliminez complètement les coûts de carburant. L\'électricité coûte une fraction du prix de l\'essence.',
      color: 'from-[#2BB673] to-[#27AAE1]'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Pas de permis requis',
      description: 'Tous vos livreurs peuvent utiliser les vélos Flockee sans permis de conduire.',
      color: 'from-[#27AAE1] to-[#2BB673]'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Compatible ZFE Paris',
      description: 'Accédez à toutes les zones à faibles émissions sans restriction ni vignette Crit\'Air.',
      color: 'from-[#2BB673] to-[#27AAE1]'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Plus rapide en centre-ville',
      description: 'Évitez les embouteillages et les difficultés de stationnement typiques de Paris.',
      color: 'from-[#27AAE1] to-[#2BB673]'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Entretien réduit',
      description: 'Transmission par courroie sans entretien, moins de pièces d\'usure qu\'un scooter.',
      color: 'from-[#2BB673] to-[#27AAE1]'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Coût prévisible',
      description: 'Budget fixe et prévisible, pas de surprise avec les coûts de maintenance ou de carburant.',
      color: 'from-[#27AAE1] to-[#2BB673]'
    }
  ];

  const operationalBenefits = [
    {
      title: 'Économies substantielles',
      points: [
        'Jusqu\'à 80% d\'économie sur les coûts énergétiques',
        'Assurance moins chère qu\'un scooter',
        'Pas de taxe de circulation',
        'Maintenance simplifiée et moins fréquente'
      ]
    },
    {
      title: 'Flexibilité opérationnelle',
      points: [
        'Déploiement rapide de nouveaux livreurs',
        'Pas de formation complexe nécessaire',
        'Stationnement facilité partout',
        'Rotation des équipes simplifiée'
      ]
    },
    {
      title: 'Image de marque positive',
      points: [
        'Engagement écologique visible',
        'Attractivité auprès des clients',
        'Différenciation concurrentielle',
        'Communication RSE authentique'
      ]
    }
  ];

  return (
    <div data-testid="advantages-page" className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
              Pourquoi les restaurants parisiens choisissent le <span className="gradient-text">vélo électrique</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le vélo électrique est devenu la solution la plus rationnelle pour la livraison en zone dense comme Paris.
            </p>
          </div>
        </div>
      </section>

      {/* Main Advantages Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Les <span className="gradient-text">6 avantages</span> majeurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainAdvantages.map((advantage, idx) => (
              <div
                key={idx}
                data-testid={`advantage-${idx}`}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Bénéfices <span className="gradient-text">opérationnels</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operationalBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 gradient-text">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2BB673] mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paris Context */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl mb-6">
                Parfaitement adapté à <span className="gradient-text">Paris</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Paris impose des contraintes spécifiques pour la livraison : zones à faibles émissions, circulation dense, 
                stationnement difficile, et rues étroites. Le vélo électrique répond parfaitement à ces défis.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-[#27AAE1] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Zones ZFE étendues</h4>
                    <p className="text-sm text-gray-600">Les restrictions augmentent chaque année. Le vélo électrique reste toujours autorisé.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-[#27AAE1] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Circulation dense</h4>
                    <p className="text-sm text-gray-600">En heure de pointe, le vélo est souvent 2 fois plus rapide qu'une voiture ou un scooter.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-[#27AAE1] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Stationnement facilité</h4>
                    <p className="text-sm text-gray-600">Garez-vous partout sans contrainte, sans amende, et sans perte de temps.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://customer-assets.emergentagent.com/job_velo-pro/artifacts/08zgqmsz_ChatGPT%20Image%2014%20fe%CC%81vr.%202026%20a%CC%80%2014_57_05.png"
                alt="Vélo Flockee à Paris"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Teaser */}
      <section className="py-20 lg:py-32 gradient-bg text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl mb-6">
            Scooter ou vélo électrique ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez notre comparatif détaillé des coûts et découvrez pourquoi le vélo électrique est la solution la plus économique.
          </p>
          <Link to="/comparatif" className="inline-block rounded-full px-8 py-4 font-semibold bg-white text-[#27AAE1] hover:bg-gray-100 transition-all shadow-lg">
            Voir le comparatif complet
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl mb-6">
            Convaincu par les avantages ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Demandez un devis personnalisé et découvrez comment Flockee peut transformer vos livraisons.
          </p>
          <Link to="/devis" data-testid="advantages-cta-button" className="btn-primary">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Advantages;