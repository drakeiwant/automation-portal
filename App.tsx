import React, { useState, useEffect } from 'react';
import { Tab, AutomationTool } from './types';
import Navbar from './components/Navbar';
import SplineBackground from './components/SplineBackground';
import Hero from './components/Hero';
import AutomationCard from './components/AutomationCard';
import ReservationView from './components/ReservationView';
// Fix: Added missing 'Activity' icon to the import list
import { 
  Bot, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  MessageSquare, 
  Zap, 
  Terminal,
  Search,
  ChevronDown,
  Activity
} from 'lucide-react';

const TOOLS_DATA: AutomationTool[] = [
  { id: '1', name: 'Neural Summary', description: 'LLM-powered document synthesis and key point extraction.', icon: <Bot className="text-blue-400" />, category: 'AI', status: 'Active' },
  { id: '2', name: 'Auto-Sync Engine', description: 'Real-time database synchronization across legacy systems.', icon: <Database className="text-purple-400" />, category: 'Infrastructure', status: 'Active' },
  { id: '3', name: 'Workflow Builder', description: 'Drag-and-drop automated business process mapping.', icon: <Layers className="text-emerald-400" />, category: 'Productivity', status: 'New' },
  { id: '4', name: 'Smart Scheduler', description: 'Intelligent meeting optimization using agentic AI.', icon: <Zap className="text-amber-400" />, category: 'Core', status: 'Active' },
  { id: '5', name: 'Global Connector', description: 'Universal API integration bridge for 500+ SaaS apps.', icon: <Globe className="text-cyan-400" />, category: 'Network', status: 'Active' },
  { id: '6', name: 'Sentiment Hub', description: 'Customer feedback analysis and automated routing.', icon: <MessageSquare className="text-pink-400" />, category: 'Marketing', status: 'Active' },
  { id: '7', name: 'Cloud Compute', description: 'Serverless execution for automation micro-tasks.', icon: <Cpu className="text-indigo-400" />, category: 'System', status: 'Under Maintenance' },
  { id: '8', name: 'Dev Console', description: 'Low-level control over automation scripts and triggers.', icon: <Terminal className="text-orange-400" />, category: 'Developer', status: 'New' },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <SplineBackground />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative z-10">
        {activeTab === 'home' && (
          <>
            <Hero />
            <section className="max-w-7xl mx-auto px-6 py-32">
               <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Core Capabilities.</h2>
                  <p className="text-white/50 text-lg">A suite of powerful tools designed to automate every facet of your business operations.</p>
                </div>
                <div className="flex gap-4">
                  <div className="relative group">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input 
                      type="text" 
                      placeholder="Search tools..." 
                      className="glass pl-12 pr-6 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all w-64"
                    />
                  </div>
                  <button className="glass px-6 py-3 rounded-full text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
                    Filter <ChevronDown size={14} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TOOLS_DATA.map((tool) => (
                  <AutomationCard key={tool.id} tool={tool} />
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'tools' && (
          <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
            <h1 className="text-6xl font-bold mb-12 tracking-tighter">The Hub.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TOOLS_DATA.map((tool) => (
                <AutomationCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        )}

        {activeTab === 'reservation' && <ReservationView />}

        {activeTab === 'analytics' && (
          <div className="min-h-[80vh] flex flex-col items-center justify-center pt-32">
            <div className="glass p-20 rounded-[3rem] text-center max-w-xl">
              {/* Added Activity icon here after correctly importing it */}
              <Activity size={64} className="mx-auto mb-8 text-blue-500 animate-pulse" />
              <h2 className="text-4xl font-bold mb-4">Under Development</h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Advanced performance analytics and predictive modeling modules are currently being optimized for the next deployment cycle.
              </p>
              <button 
                onClick={() => setActiveTab('home')}
                className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
              >
                Return Home
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="relative z-10 border-t border-white/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <span className="font-bold text-xl">NEXUS</span>
              </div>
              <p className="text-white/40 max-w-sm leading-relaxed">
                Building the future of business intelligence through sophisticated automation and elegant design. 
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Explore</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">Overview</button></li>
                <li><button onClick={() => setActiveTab('tools')} className="hover:text-white transition-colors">Automation Tools</button></li>
                <li><button onClick={() => setActiveTab('reservation')} className="hover:text-white transition-colors">Reservations</button></li>
                <li><button onClick={() => setActiveTab('analytics')} className="hover:text-white transition-colors">Analytics</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Support</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/20">
            <p>© 2024 Nexus Automation Systems Inc. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;