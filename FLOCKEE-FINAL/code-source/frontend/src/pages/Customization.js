import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Eye, Star, TrendingUp } from 'lucide-react';

const Customization = () => {
  return (
    <div data-testid="customization-page" className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
              Votre restaurant <span className="gradient-text">visible</span> dans chaque rue de votre quartier
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Grâce à la personnalisation partielle ou complète, votre vélo devient un support de communication mobile pour votre restaurant.
            </p>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Partial Customization */}
            <div data-testid="partial-customization" className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#27AAE1] to-[#2BB673] rounded-2xl flex items-center justify-center text-white mb-6">
                <Palette size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Personnalisation partielle</h2>
              <p className="text-gray-600 mb-6">
                Une approche subtile pour afficher votre identité de marque tout en conservant l'esthétique Flockee.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#2BB673] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Logo de votre restaurant</h3>
                    <p className="text-sm text-gray-600">Appliqué sur le sac de livraison et/ou sur le cadre</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#2BB673] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Éléments visuels discrets</h3>
                    <p className="text-sm text-gray-600">Stickers ou marquages légers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#2BB673] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Préservation de la base Flockee</h3>
                    <p className="text-sm text-gray-600">Le vélo garde son identité d'origine</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f7fff7] p-4 rounded-xl">
                <p className="text-sm text-gray-700">
                  <strong>Idéal pour :</strong> Les restaurants qui souhaitent une présence de marque sans investissement lourd dans le design.
                </p>
              </div>
            </div>

            {/* Complete Customization */}
            <div data-testid="complete-customization" className="bg-gradient-to-br from-[#27AAE1] to-[#2BB673] p-10 rounded-3xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Star size={32} />
                </div>
                <div className="inline-block px-3 py-1 bg-[#ffe66d] text-[#191919] text-xs font-bold rounded-full mb-4">
                  RECOMMANDÉ
                </div>
                <h2 className="text-3xl font-bold mb-4">Personnalisation complète</h2>
                <p className="mb-6 opacity-90">
                  Transformez votre vélo Flockee en véritable ambassadeur de votre marque. Visibilité maximale dans les rues de Paris.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Couleurs de votre restaurant</h3>
                      <p className="text-sm opacity-90">Peinture personnalisée aux couleurs de votre marque</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Logo sur cadre et sac</h3>
                      <p className="text-sm opacity-90">Marquage professionnel et durable</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Vélo entièrement identifié</h3>
                      <p className="text-sm opacity-90">Chaque élément peut arborer votre identité</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Support marketing mobile</h3>
                      <p className="text-sm opacity-90">Visibilité constante dans votre quartier</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-sm">
                    <strong>Idéal pour :</strong> Les restaurants qui veulent maximiser leur visibilité et faire de chaque livraison une opportunité marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#f7fff7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
            Les avantages de la <span className="gradient-text">personnalisation</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Eye size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Visibilité accrue</h3>
              <p className="text-gray-600">
                Chaque livraison devient une publicité mobile pour votre restaurant dans les rues de Paris.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Reconnaissance de marque</h3>
              <p className="text-gray-600">
                Renforcez votre identité locale et la mémorisation de votre marque auprès des clients potentiels.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Image professionnelle</h3>
              <p className="text-gray-600">
                Un vélo personnalisé renforce la crédibilité et le professionnalisme de votre service de livraison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-[#ffe66d]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700">
            <strong>Note importante :</strong> Les options de personnalisation dépendent de la formule choisie (achat, LLD) et de la durée d'engagement. 
            Contactez-nous pour un devis personnalisé.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl mb-6">
            Personnalisez votre flotte Flockee
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discutons de vos besoins en personnalisation et créons ensemble des vélos à votre image.
          </p>
          <Link to="/devis" data-testid="customization-cta-button" className="inline-block rounded-full px-8 py-4 font-semibold bg-white text-[#27AAE1] hover:bg-gray-100 transition-all shadow-lg">
            Demander un devis personnalisé
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Customization;