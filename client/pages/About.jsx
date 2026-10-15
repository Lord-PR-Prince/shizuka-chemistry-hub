import React from 'react';
import { BookOpen, ShieldCheck, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-cyan-400">About Shizuka Chemistry Hub</h2>
      <p className="text-slate-300 leading-relaxed text-lg">
        Specializing in advanced chemical reaction research, innovative molecule synthesis, and modern formula formulation. We provide world-class tools for students, researchers, and engineers.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
          <BookOpen className="w-8 h-8 text-cyan-400"/>
          <h3 className="font-bold text-slate-200">Rigorous Curriculum</h3>
          <p className="text-xs text-slate-400">Complete syllabus guides, textbooks, and interactive problem sets for grades 1 through 12 and university degrees.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
          <Cpu className="w-8 h-8 text-blue-400"/>
          <h3 className="font-bold text-slate-200">3D WebGL Simulation</h3>
          <p className="text-xs text-slate-400">Real-time Three.js rendered beakers, color shifts, bubbling, and precision stoichiometric validation.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
          <ShieldCheck className="w-8 h-8 text-indigo-400"/>
          <h3 className="font-bold text-slate-200">Verified Reports</h3>
          <p className="text-xs text-slate-400">Instantly generate professional PDF lab reports with reaction mechanisms and parameters.</p>
        </div>
      </div>
    </div>
  );
}