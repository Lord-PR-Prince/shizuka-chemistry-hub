import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Bachelors from './pages/Bachelors';
import Lab3D from './pages/Lab3D';
import Contact from './pages/Contact';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
const PYTHON_URL = import.meta.env.VITE_PYTHON_URL || 'http://localhost:5000';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black flex flex-col justify-between">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        user={user} 
        setIsAuthOpen={setIsAuthOpen} 
      />

      <main className="p-6 max-w-7xl mx-auto w-full flex-grow">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <About />}
        {activeTab === 'classes' && <Classes />}
        {activeTab === 'bachelors' && <Bachelors />}
        {activeTab === 'lab' && <Lab3D PYTHON_URL={PYTHON_URL} />}
        {activeTab === 'contact' && <Contact />}
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        setUser={setUser} 
        API_URL={API_URL} 
      />
    </div>
  );
}