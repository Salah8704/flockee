import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, Shield, Settings, Package, Check } from 'lucide-react';

const Bike = () => {
  const specs = [
    { icon: <Battery />, label: 'Batterie Li-Ion 21 Ah', value: "Jusqu'à 100 km d'autonomie" },
    { icon: <Zap />, label: 'Transmission', value: 'Courroie sans entretien' },
    { icon: <Shield />, label: 'Pneus', value: 'Anti-crevaison renforcés' },
    { icon: <Settings />, label: 'Cadre', value: 'Robuste usage intensif' },
    { icon: <Package />, label: 'Cargo box', value: 'Sac de livraison standard inclus' },
  ];

  const highlights = [
    'Conçu spécifiquement pour la livraison professionnelle',
    'Testé pendant plus de 2 ans à Paris et en banlieue',
    'Conditions réelles de livraison urbaine intensive',
    'Un seul modèle optimisé et éprouvé',
    'Maintenance simplifiée pour usage quotidien',
    'Adapté aux règlements ZFE parisiens'
  ];

  return (
    <div data-testid="bike-page" className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
              Le vélo électrique professionnel <span className="gradient-text">Flockee</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un vélo spécialement conçu et testé pour répondre aux exigences de la livraison professionnelle à Paris.
            </p>
          </div>

          <div className="mb-16">
            <img
              src="https://customer-assets.emergentagent.com/job_velo-pro/artifacts/1zhp7odf_ChatGPT%20Image%2014%20fe%CC%81vr.%202026%20a%CC%80%2013_17_47.png"
              alt="Vélo électrique professionnel Flockee"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl mb-12 text-center">
            Caractéristiques techniques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specs.map((spec, idx) => (
              <div key={idx} data-testid={`spec-${idx}`} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white mb-4">
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{spec.label}</h3>
                <p className="text-gray-600">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Testing */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl mb-6">
                Testé en <span className="gradient-text">conditions réelles</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Le vélo Flockee n'est pas un simple vélo électrique adapté. C'est un vélo conçu de A à Z pour la livraison professionnelle, 
                et utilisé depuis plus de 2 ans dans les rues de Paris et de sa banlieue.
              </p>
              <div className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-[#2BB673] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://customer-assets.emergentagent.com/job_velo-pro/artifacts/dot9tsdv_ChatGPT%20Image%2014%20fe%CC%81vr.%202026%20a%CC%80%2017_51_59.png"
                alt="Vélo Flockee en action à Paris"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Context Image */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl mb-4">
              Conçu pour Paris
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un vélo qui connaît parfaitement les rues parisiennes, les ZFE, et les défis de la livraison urbaine.
            </p>
          </div>
          <img
            src="https://customer-assets.emergentagent.com/job_velo-pro/artifacts/08zgqmsz_ChatGPT%20Image%2014%20fe%CC%81vr.%202026%20a%CC%80%2014_57_05.png"
            alt="Vélo Flockee devant la Tour Eiffel"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl mb-6">
            Intéressé par le vélo Flockee ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez nos solutions de personnalisation et nos tarifs adaptés à votre activité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tarifs" className="inline-block rounded-full px-8 py-4 font-semibold bg-white text-[#27AAE1] hover:bg-gray-100 transition-all shadow-lg">
              Voir les tarifs
            </Link>
            <Link to="/devis" className="inline-block rounded-full px-8 py-4 font-semibold border-2 border-white text-white hover:bg-white hover:text-[#27AAE1] transition-all">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bike;