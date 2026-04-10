import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Clock, Shield, Check } from 'lucide-react';
import PricingCalculator from '../components/PricingCalculator';

const Pricing = () => {
  const plans = [
    {
      name: 'Achat',
      price: '2 190',
      unit: '€ HT',
      period: 'par vélo',
      icon: <ShoppingCart />,
      features: [
        'Vélo Flockee Delivery',
        'Propriété complète',
        'Personnalisation possible',
        'Sac de livraison inclus',
        'Garantie constructeur'
      ],
      highlight: false
    },
    {
      name: 'LLD sans service',
      price: 'à partir de 20,54',
      unit: '€ HT',
      period: '/ semaine',
      icon: <Clock />,
      features: [
        'Durée: 24, 36 ou 48 mois',
        'Location longue durée',
        'Personnalisation partielle possible',
        'Sac de livraison inclus',
        'Option de rachat en fin de contrat'
      ],
      highlight: false
    },
    {
      name: 'LLD avec services',
      price: 'à partir de 29,77',
      unit: '€ HT',
      period: '/ semaine',
      icon: <Shield />,
      features: [
        'Durée: 36 ou 48 mois',
        'Maintenance incluse',
        'Assistance prioritaire',
        'Remplacement en cas de panne',
        'Personnalisation complète possible',
        'Assurance incluse'
      ],
      highlight: true
    }
  ];

  return (
    <div data-testid="pricing-page" className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
            Nos solutions pour <span className="gradient-text">équiper</span> votre restaurant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Des formules flexibles adaptées à votre activité et à votre budget.
          </p>

          {/* Main Price Display */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-2 border-[#27AAE1]/20">
            <div className="text-sm text-gray-600 mb-2">Flockee Delivery Bike</div>
            <div className="text-5xl font-bold gradient-text mb-2">2 190 € HT</div>
            <div className="text-sm text-gray-500 mb-4">Prix hors financement</div>
            <div className="border-t pt-4">
              <div className="text-gray-700">
                à partir de <span className="text-2xl font-bold text-[#27AAE1]">45,63 € HT</span> / mois*
              </div>
              <div className="text-gray-700 mt-1">
                ou <span className="text-2xl font-bold text-[#2BB673]">10,54 € HT</span> / semaine*
              </div>
              <p className="text-xs text-gray-500 mt-4">
                *Simulation basée sur un paiement réparti sur 48 mois. Hors frais de leasing, assurance ou services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Choisissez votre <span className="gradient-text">formule</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                data-testid={`pricing-plan-${idx}`}
                className={`bg-white p-10 rounded-3xl shadow-xl border relative overflow-hidden ${
                  plan.highlight ? 'border-[#27AAE1] ring-2 ring-[#27AAE1]/20' : 'border-gray-100'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-br from-[#27AAE1] to-[#2BB673] text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                      POPULAIRE
                    </div>
                  </div>
                )}

                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center text-white mb-4">
                  {plan.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.unit}</span>
                  <div className="text-sm text-gray-500">{plan.period}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-[#2BB673] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/devis"
                  className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all ${
                    plan.highlight
                      ? 'gradient-bg text-white hover:shadow-lg'
                      : 'border-2 border-[#191919] text-[#191919] hover:bg-[#191919] hover:text-white'
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
            Les options de personnalisation dépendent de la formule choisie et de la durée d'engagement.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCalculator />
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-[#ffe66d]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Note importante</h3>
            <p className="text-gray-700">
              Les frais de financement, assurance et options de personnalisation peuvent modifier le montant final. 
              Les tarifs indiqués sont fournis à titre indicatif et peuvent varier selon votre situation et vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl mb-6">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Notre équipe vous accompagne pour trouver la solution la mieux adaptée à votre restaurant.
          </p>
          <Link to="/devis" data-testid="pricing-cta-button" className="inline-block rounded-full px-8 py-4 font-semibold bg-white text-[#27AAE1] hover:bg-gray-100 transition-all shadow-lg">
            Obtenir un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;