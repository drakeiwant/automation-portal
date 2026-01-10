
import React, { useState } from 'react';
import { Loader2, ExternalLink, RefreshCw } from 'lucide-react';

const ReservationView: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);

  const refresh = () => {
    setLoading(true);
    setKey(prev => prev + 1);
  };

  return (
    <div className="relative z-10 w-full h-[calc(100vh-120px)] mt-24 px-4 pb-4 animate-fade-in">
      <div className="w-full h-full glass rounded-[2.5rem] overflow-hidden flex flex-col relative shadow-2xl">
        <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <span className="ml-4 text-sm text-white/40 font-mono tracking-wider truncate hidden sm:inline">
              nexus.reserve/meeting-room-manager
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={refresh} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <RefreshCw size={18} className={`text-white/60 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <a 
              href="https://meeting-room-koidi5bb4usqlt7ifajsyf.streamlit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ExternalLink size={18} className="text-white/60" />
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative bg-white/5">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm z-20">
              <Loader2 size={48} className="animate-spin text-blue-500 mb-4" />
              <p className="text-white/60 font-medium">Connecting to Secure Reservation Node...</p>
            </div>
          )}
          <iframe
            key={key}
            src="https://meeting-room-koidi5bb4usqlt7ifajsyf.streamlit.app/?embed=true"
            className="w-full h-full border-none"
            onLoad={() => setLoading(false)}
            title="Meeting Room Reservation"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationView;
