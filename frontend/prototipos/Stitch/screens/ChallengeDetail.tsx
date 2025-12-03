import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Clock, RotateCcw, CheckCircle } from 'lucide-react';
import { ViewState } from '../types';

interface ChallengeDetailProps {
  onBack: () => void;
}

const ChallengeDetail: React.FC<ChallengeDetailProps> = ({ onBack }) => {
  const [timeLeft, setTimeLeft] = useState(3600 + 1799); // 01:29:59 in seconds
  const [code, setCode] = useState(`function isPalindrome(s) {
  // Your code here
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  
  
  return true;
}`);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="h-screen flex flex-col bg-dark-bg animate-in fade-in">
      {/* Header */}
      <header className="h-16 border-b border-dark-border bg-dark-card flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-dark-muted hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-bold text-white">Valid Palindrome</h2>
          <span className="px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
            Medium
          </span>
        </div>
        
        <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 font-mono text-xl font-bold text-white bg-dark-bg px-4 py-1 rounded-lg border border-dark-border">
                <Clock size={16} className="text-primary" />
                {formatTime(timeLeft)}
            </div>
            <div className="w-48 h-2 bg-dark-bg rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/2 rounded-full"></div>
            </div>
        </div>

        <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-dark-bg text-dark-muted hover:text-white border border-dark-border hover:border-white/20 transition-all">
                <RotateCcw size={16} />
                Reset
             </button>
             <button className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all">
                <Play size={16} fill="currentColor" />
                Run Code
             </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Problem Description */}
        <div className="w-1/2 p-6 overflow-y-auto border-r border-dark-border">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Problem Description</h3>
              <p className="text-dark-text leading-relaxed">
                A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
              </p>
              <p className="text-dark-text mt-4">
                Given a string <code className="bg-dark-card px-1 py-0.5 rounded border border-dark-border">s</code>, return <code className="bg-dark-card px-1 py-0.5 rounded border border-dark-border">true</code> if it is a palindrome, or <code className="bg-dark-card px-1 py-0.5 rounded border border-dark-border">false</code> otherwise.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Examples</h4>
              
              <div className="bg-dark-card rounded-lg p-4 border border-dark-border">
                <p className="text-sm font-mono mb-2"><span className="text-dark-muted">Input:</span> s = "A man, a plan, a canal: Panama"</p>
                <p className="text-sm font-mono"><span className="text-dark-muted">Output:</span> <span className="text-primary">true</span></p>
              </div>

              <div className="bg-dark-card rounded-lg p-4 border border-dark-border">
                <p className="text-sm font-mono mb-2"><span className="text-dark-muted">Input:</span> s = "race a car"</p>
                <p className="text-sm font-mono"><span className="text-dark-muted">Output:</span> <span className="text-red-400">false</span></p>
              </div>
            </div>

            <div>
                <h4 className="font-semibold text-white mb-2">Constraints</h4>
                <ul className="list-disc list-inside text-dark-text space-y-1 text-sm">
                    <li>1 {'<='} s.length {'<='} 2 * 105</li>
                    <li>s consists only of printable ASCII characters.</li>
                </ul>
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="w-1/2 flex flex-col bg-[#1E1E1E]">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#3E3E42]">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-[#CCCCCC]">JAVASCRIPT</span>
                </div>
                <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#3E3E42]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#3E3E42]"></div>
                </div>
            </div>
            <div className="flex-1 relative">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#1E1E1E] border-r border-[#3E3E42] flex flex-col items-end pr-2 pt-4 text-[#858585] font-mono text-sm leading-6 select-none">
                    {Array.from({length: 20}).map((_, i) => <div key={i}>{i+1}</div>)}
                </div>
                <textarea
                    spellCheck={false}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-full bg-transparent text-[#D4D4D4] font-mono text-sm leading-6 pl-16 pt-4 resize-none focus:outline-none selection:bg-[#264F78]"
                />
            </div>
            <div className="h-12 bg-dark-card border-t border-dark-border flex items-center justify-end px-4">
                <span className="text-xs text-dark-muted flex items-center gap-1">
                    <CheckCircle size={12} className="text-green-500" /> Saved
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetail;