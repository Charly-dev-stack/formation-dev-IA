import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

export default function HeroSection() {
  return (
    <div 
      className="relative min-h-[600px] flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Réalisez vos projets avec un financement sur mesure
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Des solutions de prêt adaptées à vos besoins avec des taux parmi les plus bas du marché. 
            Prêt immobilier à partir de 1.9% TAEG.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/apply"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Demander un prêt <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="#calculator"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Simuler un prêt <Calculator className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
              <div className="text-2xl font-bold mb-1">1.9%</div>
              <div className="text-sm">TAEG Immobilier</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
              <div className="text-2xl font-bold mb-1">2.5%</div>
              <div className="text-sm">TAEG Auto</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
              <div className="text-2xl font-bold mb-1">2.9%</div>
              <div className="text-sm">TAEG Personnel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}