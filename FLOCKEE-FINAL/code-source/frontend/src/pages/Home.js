import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Gauge, Shield, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const features = [
    {
      icon: <Battery className="w-8 h-8 text-[#27AAE1]" />,
      title: 'Batterie 21 Ah',
      description: "Jusqu'à 100 km d'autonomie"
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#2BB673]" />,
      title: 'Transmission courroie',
      description: 'Faible entretien, silencieux'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#27AAE1]" />,
      title: 'Pneus anti-crevaison',
      description: 'Sécurité et fiabilité'
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#2BB673]" />,
      title: 'Cadre robuste',
      description: 'Usage intensif professionnel'
    }
  ];

  const advantages = [
    'Pas de carburant',
    'Pas de permis requis',
    'Compatible ZFE Paris',
    'Plus rapide en centre-ville',
    'Entretien réduit',
    'Coût prévisible'
  ];

  return (
    <div data-testid="home-page" className="pt-20">
      <SEO
        title="Vélo électrique livraison restaurant Paris | Flockee"
        description="Flockee propose des vélos électriques professionnels pour la livraison des restaurants à Paris et en Île-de-France. Solution robuste, personnalisable et adaptée aux flottes de livraison. À partir de 45€ HT/mois."
        keywords="vélo électrique livraison restaurant Paris, vélo livraison restaurant, flotte vélo livraison restaurant, vélo électrique professionnel livraison, dark kitchen Paris, livraison vélo électrique Paris, ZFE Paris vélo"
        canonical="/"
        localBusiness={true}
        location="Paris"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f7fff7] to-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
                Vélos électriques <span className="gradient-text">professionnels</span> pour la livraison des restaurants à Paris
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                La livraison est devenue un élément essentiel pour de nombreux restaurants à Paris. 
                Pour répondre aux contraintes de circulation, aux zones à faibles émissions et aux coûts des scooters, 
                de plus en plus d'établissements choisissent le vélo électrique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/devis" data-testid="hero-cta-button" className="btn-primary text-center">
                  Demander un devis
                </Link>
                <Link to="/velo-flockee" className="btn-outline text-center">
                  Découvrir le vélo
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_velo-pro/artifacts/08zgqmsz_ChatGPT%20Image%2014%20fe%CC%81vr.%202026%20a%CC%80%2014_57_05.png"
                alt="Vélo électrique Flockee à Paris"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
              Le vélo électrique professionnel <span className="gradient-text">Flockee</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conçu spécifiquement pour la livraison et testé pendant plus de 2 ans dans les conditions réelles à Paris.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://customer-assets.emergentagent.com/job_velo-pro/artifacts/1zhp7odf_ChatGPT%20Image%2014%20fe%CC%81vr.%202026%20a%CC%80%2013_17_47.png"
              alt="Vélo Flockee avec cargo box"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Flockee */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
                Pourquoi les restaurants parisiens choisissent le <span className="gradient-text">vélo électrique</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((advantage, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#2BB673] flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-600">
                Le vélo est souvent la solution la plus rationnelle pour la livraison en zone dense comme Paris.
              </p>
              <Link to="/avantages" className="inline-flex items-center mt-6 text-[#27AAE1] font-semibold hover:gap-2 transition-all">
                En savoir plus <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div>
              <img
                src="https://customer-assets.emergentagent.com/job_velo-pro/artifacts/dot9tsdv_ChatGPT%20Image%2014%20fe%CC%81vr.%202026%20a%CC%80%2017_51_59.png"
                alt="Livreur Flockee en action"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
            Des solutions adaptées à <span className="gradient-text">votre restaurant</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            À partir de 45,63 € HT / mois ou 10,54 € HT / semaine. 
            Découvrez nos formules d'achat, de location longue durée avec ou sans services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tarifs" className="btn-primary text-center">
              Voir les tarifs
            </Link>
            <Link to="/devis" className="btn-outline text-center">
              Demander un devis personnalisé
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
            Prêt à équiper votre restaurant ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez les restaurants parisiens qui ont choisi Flockee pour leurs livraisons.
          </p>
          <Link to="/devis" data-testid="bottom-cta-button" className="inline-block rounded-full px-8 py-4 font-semibold bg-white text-[#27AAE1] hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;