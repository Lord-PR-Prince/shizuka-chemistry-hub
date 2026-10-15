import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl">
      <h2 className="text-2xl font-bold text-cyan-400">Contact Shizuka Hub</h2>
      <div className="space-y-3 text-sm text-slate-300">
        <p className="flex items-center gap-3"><Phone className="text-cyan-400 w-4 h-4"/> 0119999999</p>
        <p className="flex items-center gap-3"><Mail className="text-cyan-400 w-4 h-4"/> shizuka_chemistry@gmail.com</p>
        <p className="flex items-center gap-3"><MapPin className="text-cyan-400 w-4 h-4"/> 404 Reaction Avenue, Catalyst City, Innovation State 110001</p>
      </div>

      {submitted ? (
        <div className="bg-cyan-950/50 border border-cyan-800 p-4 rounded-xl text-cyan-300 text-center text-sm">
          Thank you! Your message has been sent successfully.
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
          <input type="text" placeholder="Your Name" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"/>
          <input type="email" placeholder="Your Email" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"/>
          <textarea rows="4" placeholder="Your Message or Research Query" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"></textarea>
          <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl shadow-lg transition">Send Message</button>
        </form>
      )}
    </div>
  );
}