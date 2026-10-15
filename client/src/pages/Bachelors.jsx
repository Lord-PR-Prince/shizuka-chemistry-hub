import React from 'react';
import { GraduationCap, BookOpen, Video } from 'lucide-react';

export default function Bachelors() {
  const degrees = [
    { title: 'B.Tech Chemical Engineering', desc: 'Process control, reactor kinetics, thermodynamics, and mass transfer operations.' },
    { title: 'B.Sc Chemistry (Hons)', desc: 'Advanced organic synthesis, quantum chemistry, and spectroscopy.' },
    { title: 'Bio-Chemistry & Applied Chemistry', desc: 'Enzymology, metabolic pathways, and pharmaceutical compound formulation.' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-cyan-400">Bachelor's Degree Chemistry Hub</h2>
      <p className="text-slate-400 text-sm">University-specific high-weightage exam topics, reference textbooks, and practical video walkthroughs.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {degrees.map((deg, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <GraduationCap className="w-8 h-8 text-cyan-400"/>
              <h3 className="text-lg font-bold text-slate-100">{deg.title}</h3>
              <p className="text-xs text-slate-400">{deg.desc}</p>
            </div>
            <button onClick={() => alert(`Accessing full syllabus and reference books for ${deg.title}`)} className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-800 hover:bg-cyan-500/20 px-4 py-2.5 rounded-xl w-full font-semibold transition">
              Access Course Material
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}