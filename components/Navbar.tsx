
import React from 'react';
import { Tab } from '../types';
import { LayoutGrid, Calendar, Box, Activity, User } from 'lucide-react';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Overview', icon: LayoutGrid },
    { id: 'tools', label: 'Automation Hub', icon: Box },
    { id: 'reservation', label: 'Reservation', icon: Calendar },
    { id: 'analytics', label: 'Insights', icon: Activity },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass px-6 py-2 rounded-full flex items-center gap-8 shadow-2xl">
        <div className="flex items-center gap-2 mr-4 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">NEXUS</span>
        </div>
        
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'bg-white text-black font-medium' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm hidden md:block">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="ml-4 border-l border-white/10 pl-4">
          <button className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center hover:scale-105 transition-transform">
            <User size={16} className="text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
