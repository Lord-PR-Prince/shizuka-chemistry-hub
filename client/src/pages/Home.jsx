import React from 'react';
import { Play, Atom, Sparkles } from 'lucide-react';

export default function Home({ setActiveTab }) {
  return (
    <div className="space-y-12">
      <div className="text-center py-20 px-4 bg-gradient-to-b from-cyan-950/30 to-transparent rounded-3xl border border-cyan-900/30 shadow-2xl">
        <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-800 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
          Next-Gen Virtual Chemistry Laboratory
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Shizuka Chemistry Hub
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Experience advanced 3D chemical reaction simulations, real-time stoichiometry validation, and comprehensive academic curricula from Class 1st to Bachelor's degrees.
        </p>
        <button 
          onClick={() => setActiveTab('lab')}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg shadow-xl shadow-cyan-500/30 flex items-center gap-3 mx-auto transition transform hover:scale-105"
        >
          <Play className="w-5 h-5 fill-current"/> Launch Virtual 3D Lab
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5"/> Recent Inventions & Modern Chemistry</h3>
          <p className="text-slate-400 text-sm mb-4">Discover newly synthesized catalytic frameworks, graphene allotropes, and eco-friendly polymer formulations updated in real-time.</p>
          <span className="text-xs bg-slate-800 text-cyan-300 px-3 py-1 rounded-full border border-slate-700">Updated Daily</span>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-blue-400 mb-2 flex items-center gap-2"><Atom className="w-5 h-5"/> Python Simulation Engine</h3>
          <p className="text-slate-400 text-sm mb-4">Verify reaction accuracy with 99.8% precision, thermodynamic enthalpy checks, and automated molecular structure balancing.</p>
          <span className="text-xs bg-slate-800 text-blue-300 px-3 py-1 rounded-full border border-slate-700">Backend Integrated</span>
        </div>
      </div>
    </div>
  );
}