import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Car } from 'lucide-react';
import LoanCalculator from '../components/LoanCalculator';

export default function AutoLoans() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Prêts Auto</h1>
          <p className="text-xl opacity-90">Financez votre véhicule neuf ou d'occasion</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Le financement adapté à votre véhicule</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Taux avantageux</h3>
                  <p className="text-gray-600">TAEG fixe à partir de 2.5% sur 60 mois</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Flexibilité maximale</h3>
                  <p className="text-gray-600">Montants de 5 000€ à 100 000€ sur 12 à 84 mois</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold">Réponse rapide</h3>
                  <p className="text-gray-600">Accord de principe en 24h</p>
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