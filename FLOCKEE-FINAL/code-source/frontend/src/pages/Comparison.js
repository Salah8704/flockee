import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, TrendingDown, TrendingUp } from 'lucide-react';

const Comparison = () => {
  const scooterCosts = [
    { item: 'Carburant (essence)', cost: '80-120 €/mois' },
    { item: 'Assurance', cost: '60-100 €/mois' },
    { item: 'Entretien régulier', cost: '40-80 €/mois' },
    { item: 'Stationnement', cost: '20-50 €/mois' },
    { item: 'Réparations imprévues', cost: '30-50 €/mois' },
  ];

  const comparisonPoints = [
    {
      category: 'Coûts mensuels',
      scooter: '200 - 400 €',
      bike: '~45 € HT',
      winner: 'bike'
    },
    {
      category: 'Carburant',
      scooter: '80-120 €/mois',
      bike: 'Électricité négligeable',
      winner: 'bike'
    },
    {
      category: 'Assurance',
      scooter: 'Obligatoire (60-100€)',
      bike: 'Optionnelle',
      winner: 'bike'
    },
    {
      category: 'Permis',
      scooter: 'Requis (BSR minimum)',
      bike: 'Non requis',
      winner: 'bike'
    },
    {
      category: 'Zones ZFE',
      scooter: 'Restrictions croissantes',
      bike: 'Accès total',
      winner: 'bike'
    },
    {
      category: 'Vitesse centre-ville',
      scooter: 'Limitée par trafic',
      bike: 'Plus rapide aux heures de pointe',
      winner: 'bike'
    },
    {
      category: 'Stationnement',
      scooter: 'Difficile + payant',
      bike: 'Facile + gratuit',
      winner: 'bike'
    },
    {
      category: 'Entretien',
      scooter: 'Fréquent et coûteux',
      bike: 'Minimal',
      winner: 'bike'
    },
  ];

  return (
    <div data-testid="comparison-page" className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
              Scooter ou <span className="gradient-text">vélo électrique</span> pour la livraison de restaurant ?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un comparatif détaillé des coûts réels pour vous aider à prendre la meilleure décision.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Breakdown - Scooter */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Scooter */}
            <div>
              <div className="bg-gray-50 p-8 rounded-3xl border-2 border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">Scooter thermique</h2>
                  <TrendingUp className="w-8 h-8 text-red-500" />
                </div>

                <div className="space-y-4 mb-6">
                  {scooterCosts.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">{item.item}</span>
                      <span className="font-semibold text-gray-900">{item.cost}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                  <div className="text-sm text-gray-600 mb-2">Coût mensuel total estimé</div>
                  <div className="text-4xl font-bold text-red-600 mb-1">200 - 400 €</div>
                  <div className="text-sm text-gray-600">par mois et par scooter</div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <X className="w-4 h-4 text-red-500" />
                    <span>Coûts variables et imprévisibles</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <X className="w-4 h-4 text-red-500" />
                    <span>Restrictions ZFE croissantes</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <X className="w-4 h-4 text-red-500" />
                    <span>Permis obligatoire</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Flockee Bike */}
            <div>
              <div className="bg-gradient-to-br from-[#27AAE1] to-[#2BB673] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold">Vélo électrique Flockee</h2>
                    <TrendingDown className="w-8 h-8" />
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="opacity-90">Location LLD 48 mois</span>
                      <span className="font-semibold">~45 € HT/mois</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="opacity-90">Électricité</span>
                      <span className="font-semibold">Négligeable</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="opacity-90">Assurance</span>
                      <span className="font-semibold">Optionnelle</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="opacity-90">Entretien</span>
                      <span className="font-semibold">Minimal</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="opacity-90">Stationnement</span>
                      <span className="font-semibold">Gratuit</span>
                    </div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/30">
                    <div className="text-sm opacity-90 mb-2">Coût mensuel total estimé</div>
                    <div className="text-4xl font-bold mb-1">~45 € HT</div>
                    <div className="text-sm opacity-90">par mois et par vélo</div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Check className="w-4 h-4" />
                      <span>Coût fixe et prévisible</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Check className="w-4 h-4" />
                      <span>Accès à toutes les zones ZFE</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Check className="w-4 h-4" />
                      <span>Aucun permis requis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Comparatif <span className="gradient-text">détaillé</span>
          </h2>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Critère</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Scooter</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Vélo Flockee</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, idx) => (
                    <tr key={idx} className="border-t border-gray-100">
                      <td className="px-6 py-4 font-semibold text-gray-900">{point.category}</td>
                      <td className="px-6 py-4 text-gray-600">{point.scooter}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-900 font-medium">{point.bike}</span>
                          {point.winner === 'bike' && (
                            <Check className="w-5 h-5 text-[#2BB673]" />
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl mb-6">
            Calculez vos <span className="gradient-text">économies</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            En passant d'un scooter à un vélo électrique Flockee, vous pouvez économiser entre :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-[#f7fff7] to-white p-6 rounded-2xl border-2 border-[#27AAE1]/20">
              <div className="text-sm text-gray-600 mb-2">Par mois</div>
              <div className="text-3xl font-bold gradient-text">155 - 355 €</div>
            </div>
            <div className="bg-gradient-to-br from-[#f7fff7] to-white p-6 rounded-2xl border-2 border-[#2BB673]/20">
              <div className="text-sm text-gray-600 mb-2">Par an</div>
              <div className="text-3xl font-bold gradient-text">1 860 - 4 260 €</div>
            </div>
            <div className="bg-gradient-to-br from-[#27AAE1] to-[#2BB673] p-6 rounded-2xl text-white">
              <div className="text-sm opacity-90 mb-2">Sur 3 ans</div>
              <div className="text-3xl font-bold">5 580 - 12 780 €</div>
            </div>
          </div>

          <p className="text-gray-600">
            Ces économies ne prennent pas en compte les avantages intangibles : accès aux ZFE, 
            image de marque positive, et facilité de recrutement de livreurs.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl mb-6">
            Prêt à faire des économies ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Demandez un devis personnalisé et découvrez combien vous pourriez économiser avec Flockee.
          </p>
          <Link to="/devis" data-testid="comparison-cta-button" className="inline-block rounded-full px-8 py-4 font-semibold bg-white text-[#27AAE1] hover:bg-gray-100 transition-all shadow-lg">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Comparison;