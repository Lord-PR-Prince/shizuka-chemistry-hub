import React from 'react';
import { Atom, Beaker, User, LogIn } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, user, setIsAuthOpen }) {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveTab('home')}>
        <Atom className="w-8 h-8 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Shizuka Chemistry Hub
        </span>
      </div>

      <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
        <button onClick={() => setActiveTab('home')} className={`hover:text-cyan-400 transition ${activeTab === 'home' ? 'text-cyan-400 font-bold' : ''}`}>Home</button>
        <button onClick={() => setActiveTab('about')} className={`hover:text-cyan-400 transition ${activeTab === 'about' ? 'text-cyan-400 font-bold' : ''}`}>About</button>
        <button onClick={() => setActiveTab('classes')} className={`hover:text-cyan-400 transition ${activeTab === 'classes' ? 'text-cyan-400 font-bold' : ''}`}>Class (1st-12th)</button>
        <button onClick={() => setActiveTab('bachelors')} className={`hover:text-cyan-400 transition ${activeTab === 'bachelors' ? 'text-cyan-400 font-bold' : ''}`}>Bachelor's</button>
        <button onClick={() => setActiveTab('lab')} className={`text-cyan-400 font-bold flex items-center gap-1 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800 hover:bg-cyan-900/50 transition`}><Beaker className="w-4 h-4"/> 3D Lab</button>
        <button onClick={() => setActiveTab('contact')} className={`hover:text-cyan-400 transition ${activeTab === 'contact' ? 'text-cyan-400 font-bold' : ''}`}>Contact</button>
      </div>

      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm border border-slate-700">
            <User className="w-4 h-4 text-cyan-400"/>
            <span className="truncate max-w-[120px]">{user}</span>
          </div>
        ) : (
          <button onClick={() => setIsAuthOpen(true)} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition shadow-lg shadow-cyan-500/20 flex items-center gap-2">
            <LogIn className="w-4 h-4"/> Login / Sign Up
          </button>
        )}
      </div>
    </nav>
  );
}