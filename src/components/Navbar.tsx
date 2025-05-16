import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-800" />
            <span className="text-xl font-bold text-blue-800">CREDIT SUISSE</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-800">Accueil</Link>
            <Link to="/personal-loans" className="text-gray-700 hover:text-blue-800">Prêts Personnels</Link>
            <Link to="/mortgage" className="text-gray-700 hover:text-blue-800">Prêts Immobiliers</Link>
            <Link to="/auto-loans" className="text-gray-700 hover:text-blue-800">Prêts Auto</Link>
            <Link to="/apply" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Demander un Prêt
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}