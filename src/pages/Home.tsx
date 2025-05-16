import React from 'react';
import { ArrowRight, Calculator, Building, Car, Shield, CheckCircle, Clock, BadgeDollarSign, Percent, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import LoanCalculator from '../components/LoanCalculator';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Types de Prêts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Solutions de Financement</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prêt Personnel</h3>
              <p className="text-gray-600 mb-4">Financez vos projets personnels avec un taux à partir de 2.9% TAEG fixe.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Montant jusqu'à 75 000€
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Durée de 12 à 84 mois
                </li>
              </ul>
              <Link to="/personal-loans" className="text-blue-800 font-semibold hover:text-blue-700">
                En savoir plus <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prêt Immobilier</h3>
              <p className="text-gray-600 mb-4">Réalisez votre projet immobilier avec un taux à partir de 1.9% TAEG fixe.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Montant jusqu'à 1 000 000€
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Durée jusqu'à 30 ans
                </li>
              </ul>
              <Link to="/mortgage" className="text-blue-800 font-semibold hover:text-blue-700">
                En savoir plus <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prêt Auto</h3>
              <p className="text-gray-600 mb-4">Financez votre véhicule avec un taux à partir de 2.5% TAEG fixe.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Montant jusqu'à 100 000€
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Durée de 12 à 84 mois
                </li>
              </ul>
              <Link to="/auto-loans" className="text-blue-800 font-semibold hover:text-blue-700">
                En savoir plus <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* ... */}
    </div>
  );
}