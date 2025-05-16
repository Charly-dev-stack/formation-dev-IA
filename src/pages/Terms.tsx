import React from 'react';

export default function Terms() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales</h1>
        
        <div className="prose max-w-none">
          <h2>1. Taux et Frais</h2>
          <p>Les taux annoncés sont des TAEG (Taux Annuel Effectif Global) fixes :</p>
          <ul>
            <li>Prêt Personnel : à partir de 2.9% TAEG fixe</li>
            <li>Prêt Immobilier : à partir de 1.9% TAEG fixe</li>
            <li>Prêt Auto : à partir de 2.5% TAEG fixe</li>
          </ul>
          <p>Les taux sont personnalisés en fonction de votre profil et du montant emprunté.</p>

          <h2>2. Conditions d'éligibilité</h2>
          <ul>
            <li>Être majeur</li>
            <li>Résider en France</li>
            <li>Justifier de revenus réguliers</li>
            <li>Présenter une situation financière saine</li>
          </ul>

          <h2>3. Documents requis</h2>
          <ul>
            <li>Pièce d'identité en cours de validité</li>
            <li>Justificatif de domicile de moins de 3 mois</li>
            <li>3 derniers bulletins de salaire</li>
            <li>Dernier avis d'imposition</li>
          </ul>

          <h2>4. Assurance emprunteur</h2>
          <p>Une assurance emprunteur est obligatoire pour les prêts immobiliers et facultative mais recommandée pour les autres types de prêts.</p>

          <h2>5. Remboursement anticipé</h2>
          <p>Le remboursement anticipé total ou partiel est possible à tout moment :</p>
          <ul>
            <li>Prêt Personnel : indemnité de 1% du capital remboursé par anticipation</li>
            <li>Prêt Immobilier : indemnité limitée à 6 mois d'intérêts</li>
            <li>Prêt Auto : indemnité de 1% du capital remboursé par anticipation</li>
          </ul>

          <h2>6. Délai de rétractation</h2>
          <p>Vous disposez d'un délai de rétractation de 14 jours calendaires à compter de l'acceptation de l'offre de prêt.</p>
        </div>
      </div>
    </div>
  );
}