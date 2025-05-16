import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function LoanApplication() {
  const [step, setStep] = useState(1);
  
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Demande de Prêt</h1>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`flex items-center ${s < step ? 'text-green-600' : s === step ? 'text-blue-800' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${s <= step ? 'bg-blue-800 text-white' : 'bg-gray-200'}`}>
                  {s < step ? <CheckCircle className="h-5 w-5" /> : s}
                </div>
                <span className="ml-2">{s === 1 ? 'Informations Personnelles' : s === 2 ? 'Détails du Prêt' : 'Documents'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {step === 1 && (
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date de naissance</label>
                  <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nationalité</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                  <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Adresse</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Suivant
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type de prêt</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>Prêt Personnel</option>
                    <option>Prêt Immobilier</option>
                    <option>Prêt Auto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Montant souhaité</label>
                  <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Durée (en années)</label>
                  <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Revenus mensuels</label>
                  <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Situation professionnelle</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>CDI</option>
                    <option>CDD</option>
                    <option>Entrepreneur</option>
                    <option>Fonctionnaire</option>
                    <option>Retraité</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Ancienneté professionnelle</label>
                  <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-blue-800 px-6 py-2 rounded-md hover:bg-gray-100"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Suivant
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pièce d'identité</label>
                  <input type="file" className="mt-1 block w-full" />
                  <p className="mt-1 text-sm text-gray-500">Format PDF ou image (max 5MB)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Justificatif de domicile</label>
                  <input type="file" className="mt-1 block w-full" />
                  <p className="mt-1 text-sm text-gray-500">Format PDF ou image (max 5MB)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bulletins de salaire (3 derniers mois)</label>
                  <input type="file" multiple className="mt-1 block w-full" />
                  <p className="mt-1 text-sm text-gray-500">Format PDF ou image (max 5MB par fichier)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Avis d'imposition</label>
                  <input type="file" className="mt-1 block w-full" />
                  <p className="mt-1 text-sm text-gray-500">Format PDF ou image (max 5MB)</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-blue-800 px-6 py-2 rounded-md hover:bg-gray-100"
                >
                  Précédent
                </button>
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Soumettre la demande
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}