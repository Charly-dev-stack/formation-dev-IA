import React, { useState } from 'react';
import { Code2, Brain, Timer, Trophy, CheckCircle, ArrowRight, Star, Cpu, Globe, Database, Cloud, Lock, X, Send } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const expertise = [
    { icon: Code2, title: "Développement Full-Stack", desc: "15 ans d'expérience en développement web moderne" },
    { icon: Brain, title: "Expert en IA", desc: "Maîtrise des derniers outils d'IA pour le développement" },
    { icon: Database, title: "Architecture Cloud", desc: "Conception de solutions cloud scalables" },
    { icon: Lock, title: "Cybersécurité", desc: "Expertise en sécurisation des applications web" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Merci pour votre intérêt ! Nous vous contacterons bientôt.');
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section avec parallax */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Révolutionnez Votre Carrière avec l'IA
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Devenez un développeur web en 6 mois grâce à notre formation innovante combinant expertise humaine et intelligence artificielle
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full text-xl flex items-center mx-auto transform hover:scale-105 transition-all duration-300">
              Commencer votre aventure <ArrowRight className="ml-3" />
            </button>
          </div>
        </div>
      </header>

      {/* Section Expertise */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Votre Mentor Expert
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-blue-500">
                <item.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us avec des stats */}
      <section className="bg-gray-800 py-20 relative">
        <div 
          className="absolute inset-0 z-0 opacity-10" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">Une Formation Révolutionnaire</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-2xl backdrop-blur-lg border border-gray-700">
              <Brain className="w-16 h-16 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">IA comme Assistant Personnel</h3>
              <p className="text-gray-300 mb-4">Apprenez à maîtriser ChatGPT, GitHub Copilot et pleins d'autres outils d'IA pour coder facilement et plus efficacement.</p>
              <div className="flex items-center text-yellow-400">
                <Star className="w-5 h-5" fill="currentColor" />
                <Star className="w-5 h-5" fill="currentColor" />
                <Star className="w-5 h-5" fill="currentColor" />
                <Star className="w-5 h-5" fill="currentColor" />
                <Star className="w-5 h-5" fill="currentColor" />
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-2xl backdrop-blur-lg border border-gray-700">
              <Timer className="w-16 h-16 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Formation Accélérée</h3>
              <p className="text-gray-300 mb-4">6 mois intensifs avec un accompagnement personnalisé pour une progression rapide et efficace.</p>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-4xl font-bold text-blue-400">180</span>
                <span>jours pour devenir développeur</span>
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-2xl backdrop-blur-lg border border-gray-700">
              <Trophy className="w-16 h-16 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Projets Professionnels</h3>
              <p className="text-gray-300 mb-4">Construisez un portfolio impressionnant avec des projets réels guidés par l'IA.</p>
              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-4xl font-bold text-blue-400">10+</span>
                <span>projets concrets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme avec timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Votre Parcours vers le Succès
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: "Fondamentaux du Développement Web",
                  desc: "Maîtrisez HTML5, CSS3, JavaScript moderne et les outils essentiels du développeur",
                  icon: Globe
                },
                {
                  title: "Intelligence Artificielle pour le Développement",
                  desc: "Apprenez à utiliser ChatGPT, Copilot et d'autres IA pour accélérer votre développement",
                  icon: Cpu
                },
                {
                  title: "Frameworks Modernes",
                  desc: "Plongez dans React, Node.js et les frameworks les plus demandés sur le marché",
                  icon: Code2
                },
                {
                  title: "Architecture Cloud",
                  desc: "Déployez vos applications sur le cloud et maîtrisez les services modernes",
                  icon: Cloud
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex-shrink-0 bg-blue-600 p-3 rounded-lg mr-6">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA avec effet de parallax */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-8">Prêt à Transformer Votre Avenir ?</h2>
          <p className="text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Rejoignez notre programme innovant et commencez votre carrière de développeur web en seulement 6 mois. Places limitées !
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-xl transform hover:scale-105 transition-all duration-300">
            S'inscrire
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">© 2024 Formation Développeur Web + IA. Tous droits réservés.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modal de contact */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full relative border border-gray-700">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold mb-6 text-center">Réservez Votre Place</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder="votreemail@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder="votre numéro ici"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white h-32 resize-none"
                  placeholder="Vos questions ou commentaires..."
                />
              </div>
              

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300"
              >
                Envoyer <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;