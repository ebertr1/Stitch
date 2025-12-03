import React from 'react';
import { Terminal, Calendar, Trophy, BarChart3, ChevronRight, Github, Twitter, Linkedin } from 'lucide-react';

interface LandingProps {
  onLogin: () => void;
}

const Landing: React.FC<LandingProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-slate-900 dark:text-white font-sans selection:bg-primary selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-dark-border bg-white/80 dark:bg-dark-bg/80 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="text-primary w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">CodeQuest</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onLogin} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={onLogin}
              className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 lg:py-32 px-4 overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                  Elevate Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                    Coding Skills
                  </span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
                  Join a community of developers. Solve daily challenges, climb the leaderboard, and master algorithms in a gamified environment.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <button 
                    onClick={onLogin}
                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/25"
                  >
                    Start Coding Free
                  </button>
                  <button className="px-8 py-4 bg-slate-100 dark:bg-dark-card text-slate-900 dark:text-white rounded-xl font-bold text-lg hover:bg-slate-200 dark:hover:bg-dark-border transition-all flex items-center gap-2">
                    View Challenges <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden aspect-square flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="https://picsum.photos/800/800?grayscale" 
                        alt="Platform Preview" 
                        className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-800/90 backdrop-blur rounded-xl border border-slate-700">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 w-3/4 bg-slate-600 rounded"></div>
                            <div className="h-2 w-1/2 bg-slate-600 rounded"></div>
                            <div className="h-2 w-full bg-slate-600 rounded"></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-slate-50 dark:bg-dark-card/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why CodeQuest?</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Everything you need to go from junior dev to algorithm master.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Calendar, title: "Daily Challenges", desc: "New problems every day to keep your streak alive and mind sharp." },
                { icon: BarChart3, title: "Detailed Analytics", desc: "Track your progress, visualize your growth, and identify weak spots." },
                { icon: Trophy, title: "Global Leaderboards", desc: "Compete with thousands of developers worldwide for the top spot." }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white dark:bg-dark-bg p-8 rounded-2xl border border-slate-200 dark:border-dark-border hover:border-primary/50 transition-colors group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-dark-bg py-12 border-t border-slate-200 dark:border-dark-border">
        <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center gap-8 mb-8">
                <Github className="text-slate-400 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="text-slate-400 hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="text-slate-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          <p className="text-slate-500 text-sm">© 2024 CodeQuest Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;