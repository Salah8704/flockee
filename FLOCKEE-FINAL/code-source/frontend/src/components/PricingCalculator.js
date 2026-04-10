import React, { useState } from 'react';

const PricingCalculator = () => {
  const [bikeCount, setBikeCount] = useState(1);
  const pricePerBike = 45.63;

  const calculateMonthly = (count) => (count * pricePerBike).toFixed(2);

  const examples = [
    { bikes: 1, monthly: '45,63' },
    { bikes: 3, monthly: '136,89' },
    { bikes: 5, monthly: '228,15' },
  ];

  return (
    <div data-testid="pricing-calculator" className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 text-center">Simulez le coût pour votre restaurant</h3>
      
      {/* Calculator */}
      <div className="mb-8">
        <label className="block text-sm font-semibold mb-2">Nombre de vélos</label>
        <input
          data-testid="bike-count-input"
          type="range"
          min="1"
          max="10"
          value={bikeCount}
          onChange={(e) => setBikeCount(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>1</span>
          <span className="font-bold text-2xl gradient-text">{bikeCount}</span>
          <span>10</span>
        </div>
      </div>

      {/* Result */}
      <div className="text-center p-6 bg-gradient-to-br from-[#f7fff7] to-white rounded-2xl border-2 border-[#27AAE1]/20">
        <div className="text-sm text-gray-600 mb-2">Coût mensuel estimé</div>
        <div data-testid="calculated-price" className="text-4xl font-bold gradient-text mb-1">
          {calculateMonthly(bikeCount)} € HT
        </div>
        <div className="text-xs text-gray-500">par mois sur 48 mois*</div>
      </div>

      {/* Examples */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold mb-3">Exemples de flottes</h4>
        <div className="space-y-2">
          {examples.map((example) => (
            <div key={example.bikes} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">{example.bikes} vélo{example.bikes > 1 ? 's' : ''}</span>
              <span className="text-sm font-bold text-[#27AAE1]">{example.monthly} € HT/mois</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center">
        *Les frais de financement, assurance et options de personnalisation peuvent modifier le montant final.
      </p>
    </div>
  );
};

export default PricingCalculator;