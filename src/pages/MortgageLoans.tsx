import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building, Shield, Clock } from 'lucide-react';
import LoanCalculator from '../components/LoanCalculator';

export default function MortgageLoans() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Prêts Immobiliers</h1>
          <p className="text-xl opacity-90">Financez votre bien immobilier aux meilleures conditions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Des taux parmi les plus bas du marché</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Taux exceptionnels</h3>
                  <p className="text-gray-600">TAEG fixe à partir de 1.9% sur 20 ans</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Montants adaptés</h3>
                  <p className="text-gray-600">Financez jusqu'à 1 000 000€ sur 30 ans maximum</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Accompagnement personnalisé</h3>
                  <p className="text-gray-600">Un conseiller dédié pour votre projet</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                to="/apply" 
                className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold inline-flex items-center hover:bg-blue-700"
              >
                Faire une demande <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <LoanCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}