import React from 'react';
import { Rocket, Heart, Github, Code, CheckCircle } from 'lucide-react';

function App() {
  return (
    // Main Container: min-h-screen ensures it takes full height,
    // flex + items-center + justify-center centralizes the content perfectly.
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4">
      
      {/* Card Component */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full transform transition hover:scale-[1.01] duration-300">
        
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white text-center">
          <div className="mx-auto bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
            <Rocket size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-1">Project Ready!</h1>
          <p className="text-indigo-100 text-sm">React + Tailwind + Lucide</p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="space-y-4">
            
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <CheckCircle className="text-green-500 flex-shrink-0" />
              <span className="text-slate-700 font-medium">Centralized Layout</span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <Code className="text-blue-500 flex-shrink-0" />
              <span className="text-slate-700 font-medium">Vite + Tailwind CSS Configured</span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <Heart className="text-red-500 flex-shrink-0" />
              <span className="text-slate-700 font-medium">Lucide Icons Integrated</span>
            </div>
            
          </div>

          <p className="text-slate-500 text-sm mt-6 text-center leading-relaxed">
            This project is configured for GitHub Pages deployment. 
            Run <code className="bg-slate-100 px-1 py-0.5 rounded text-pink-500">npm run deploy</code> to publish.
          </p>

          {/* Action Button */}
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full bg-slate-900 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;