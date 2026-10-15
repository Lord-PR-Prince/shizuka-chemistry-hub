import React from 'react';
import { Atom } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20 py-8 px-6 text-center text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <Atom className="w-6 h-6 text-cyan-400" />
          <span className="font-bold text-slate-200">Shizuka Chemistry Hub</span>
        </div>
        <p>© {new Date().getFullYear()} Shizuka Chemistry Hub. Advanced Virtual Laboratory & Research Platform.</p>
        <p className="text-xs text-slate-500">Catalyst City, Innovation State</p>
      </div>
    </footer>
  );
}