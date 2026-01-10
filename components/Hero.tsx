
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl animate-fade-in-up">
        <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-widest text-blue-400 mb-6 border border-blue-400/20">
          POWERED BY INTELLIGENT AUTOMATION
        </span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-tight">
          Redefining Efficiency.
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Experience the next generation of business operations. Seamless automation, intelligent workflows, and high-performance design unified in one single portal.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all flex items-center gap-2 group">
            Get Started <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
            Watch the Event <Play size={18} className="fill-white" />
          </button>
        </div>
      </div>

      <div className="mt-24 w-full max-w-6xl">
        <div className="glass rounded-3xl p-8 aspect-[21/9] flex items-end overflow-hidden relative group">
          <img 
            src="https://picsum.photos/seed/dashboard/1200/600" 
            alt="Dashboard Preview" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-10 w-full flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-semibold">Nexus OS 2.5</h3>
              <p className="text-white/50">Unified system for global operations</p>
            </div>
            <button className="px-4 py-2 bg-white/20 backdrop-blur hover:bg-white/30 rounded-full text-sm">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
