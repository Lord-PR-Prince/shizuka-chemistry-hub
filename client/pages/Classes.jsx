import React, { useState } from 'react';
import { BookOpen, Download, PlayCircle } from 'lucide-react';

export default function Classes() {
  const [selectedClass, setSelectedClass] = useState(10);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-cyan-400">Class Curriculum (1st to 12th)</h2>
      <p className="text-slate-400 text-sm">Select your grade level to access curated chemistry chapters, textbooks, and animated reaction breakdowns.</p>
      
      <div className="flex flex-wrap gap-2 py-2">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((cls) => (
          <button 
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${selectedClass === cls ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'}`}
          >
            Class {cls}
          </button>
        ))}
      </div>

      <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h3 className="text-2xl font-bold text-cyan-300">Class {selectedClass} Chemistry Syllabus</h3>
            <p className="text-xs text-slate-400 mt-1">Includes chapter notes, periodic tables, and foundational experiments.</p>
          </div>
          <button onClick={() => alert(`Downloading Class ${selectedClass} Complete PDF Syllabus...`)} className="bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-800/50 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2">
            <Download className="w-4 h-4"/> Download PDF Book
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2"><PlayCircle className="text-cyan-400 w-4 h-4"/> Chapter 1: Basic Atomic Structure</h4>
            <p className="text-xs text-slate-400">Interactive mini-reaction visualizer demonstrating electron shells and subatomic bonding.</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm flex items-center gap-2"><PlayCircle className="text-cyan-400 w-4 h-4"/> Chapter 2: Acids, Bases & Salts</h4>
            <p className="text-xs text-slate-400">Neutralization reaction breakdown and indicator color shifts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}