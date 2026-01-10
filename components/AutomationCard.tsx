
import React from 'react';
import { AutomationTool } from '../types';
import { ArrowUpRight } from 'lucide-react';

const AutomationCard: React.FC<{ tool: AutomationTool }> = ({ tool }) => {
  return (
    <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 cursor-pointer group flex flex-col justify-between aspect-square">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
          {tool.icon}
        </div>
        <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">{tool.category}</span>
            {tool.status === 'New' && (
              <span className="px-2 py-0.5 bg-blue-600 rounded-full text-[10px] text-white">New</span>
            )}
        </div>
        <h3 className="text-2xl font-bold mb-3">{tool.name}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{tool.description}</p>
      </div>
      
      <div className="flex items-center justify-between mt-6">
        <span className="text-xs text-white/30 group-hover:text-white/60 transition-colors">View Integration</span>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default AutomationCard;
