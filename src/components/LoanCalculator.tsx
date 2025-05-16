import React, { useState } from 'react';

export default function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [years, setYears] = useState(5);
  const [rate] = useState(3.5);

  const calculateMonthlyPayment = () => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return monthlyPayment.toFixed(2);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Calculateur de Prêt</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Montant du prêt</label>
          <input
            type="range"
            min="1000"
            max="100000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-blue-800 font-semibold">{amount.toLocaleString()}€</span>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Durée (années)</label>
          <input
            type="range"
            min="1"
            max="30"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-blue-800 font-semibold">{years} ans</span>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-sm text-gray-600">Taux d'intérêt annuel: {rate}%</p>
          <p className="text-lg font-bold text-blue-800">
            Mensualité: {calculateMonthlyPayment()}€
          </p>
        </div>
      </div>
    </div>
  );
}