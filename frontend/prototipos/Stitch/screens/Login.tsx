import React from 'react';
import { Terminal, Lock, Mail } from 'lucide-react';

interface LoginProps {
  onSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  return (
    <div className="min-h-screen w-full flex bg-white dark:bg-dark-bg">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
              <Terminal size={24} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Welcome Back</h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">Sign in to continue your streak</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSuccess(); }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-dark-border rounded-lg bg-slate-50 dark:bg-dark-card text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="alex@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock size={18} />
                  </div>
                  <input 
                    type="password" 
                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-dark-border rounded-lg bg-slate-50 dark:bg-dark-card text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 dark:text-slate-400">Remember me</label>
              </div>
              <button type="button" className="text-sm font-medium text-primary hover:text-primary-dark">Forgot password?</button>
            </div>

            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-95">
              Sign in
            </button>
            
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-dark-border"></div></div>
                <div className="relative flex justify-center text-sm"><span className="px-2 bg-white dark:bg-dark-bg text-slate-500">Or continue with</span></div>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 dark:border-dark-border rounded-lg shadow-sm bg-white dark:bg-dark-card text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-border transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Sign in with Google
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Creative */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-600 to-violet-700 relative items-center justify-center p-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-lg text-center">
            <blockquote className="text-3xl font-display font-bold leading-tight mb-6">
                "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <cite className="text-indigo-200 not-italic text-lg block mb-12">— Cory House</cite>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-left border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="font-mono text-sm space-y-2 text-indigo-100">
                    <p><span className="text-purple-300">function</span> <span className="text-yellow-300">isPalindrome</span>(s) {'{'}</p>
                    <p className="pl-4">return s === s.split(<span className="text-green-300">''</span>).reverse().join(<span className="text-green-300">''</span>);</p>
                    <p>{'}'}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;