import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  Briefcase, 
  Home, 
  TrendingUp, 
  HeartHandshake, 
  Activity, 
  CheckCircle2 
} from 'lucide-react';
import { ECOSYSTEM_ENTITIES, EcosystemEntity } from '../data/ecosystem';

export const EcosystemSection: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState<EcosystemEntity>(ECOSYSTEM_ENTITIES[0]);

  return (
    <section id="ecosystem" className="py-24 relative bg-[#010915] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#38bdf8] text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>GROUP ARCHITECTURE & SUBSIDIARIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The Bajaj Finserv <span className="text-gradient-bajaj">Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            A comprehensive network of specialized financial institutions, insurance joint-ventures, and digital healthcare innovators.
          </p>
        </div>

        {/* 2-Column Interactive Ecosystem Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Entity Tabs List */}
          <div className="lg:col-span-5 space-y-3">
            {ECOSYSTEM_ENTITIES.map((entity) => {
              const isSelected = selectedEntity.id === entity.id;

              return (
                <div
                  key={entity.id}
                  onClick={() => setSelectedEntity(entity)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#002244] border-blue-400/50 shadow-lg scale-[1.01]'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected
                          ? 'bg-gradient-to-tr from-[#0072ce] to-[#38bdf8] text-white'
                          : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      <Building2 className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-white leading-tight">
                        {entity.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {entity.category}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#38bdf8] translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Entity Deep-Dive Spotlight Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedEntity.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${selectedEntity.color}, ${selectedEntity.accent})`,
                }}
              />

              {/* Entity Title & Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
                    {selectedEntity.role}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {selectedEntity.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                    <span>Established {selectedEntity.established}</span>
                    <span>•</span>
                    <span className="text-slate-300">{selectedEntity.category}</span>
                  </div>
                </div>

                <a
                  href={selectedEntity.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-colors shrink-0"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Entity Description */}
              <div className="py-6">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedEntity.description}
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/30 border border-white/10 mb-6">
                {selectedEntity.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg sm:text-xl font-extrabold text-white font-mono">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Offerings Pills */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Financial Solutions & Services:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedEntity.keyProducts.map((prod, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#38bdf8]" />
                      <span>{prod}</span>
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
