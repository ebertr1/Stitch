import React from 'react';
import { Bell, Trophy, Flame, Moon, MessageSquare, Check, SlidersHorizontal } from 'lucide-react';

const Notifications: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto animate-in fade-in">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Notifications</h1>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-dark-card text-white text-sm font-bold rounded-lg hover:bg-dark-border transition-colors">
                Mark all as read
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-dark-card text-white rounded-lg hover:bg-dark-border transition-colors">
                <SlidersHorizontal size={20} />
            </button>
        </div>
      </header>

      <div className="space-y-6">
        <div>
            <h3 className="text-dark-muted font-semibold text-sm uppercase tracking-wider mb-3 px-2">Today</h3>
            <div className="space-y-2">
                {/* Notification Item */}
                <div className="group bg-dark-card hover:bg-dark-border/50 border border-transparent hover:border-dark-border p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all">
                    <div className="relative">
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-dark-card"></div>
                        <div className="w-12 h-12 bg-dark-bg rounded-lg flex items-center justify-center text-yellow-400">
                            <Trophy size={24} />
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-white font-medium">New Challenge Available</p>
                        <p className="text-dark-muted text-sm">5 minutes ago</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white/10 rounded-lg text-dark-muted hover:text-white transition-all">
                        <Check size={18} />
                    </button>
                </div>

                <div className="group bg-dark-card hover:bg-dark-border/50 border border-transparent hover:border-dark-border p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all">
                    <div className="relative">
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-dark-card"></div>
                        <div className="w-12 h-12 bg-dark-bg rounded-lg flex items-center justify-center text-orange-400">
                            <Flame size={24} />
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-white font-medium">Streak Maintained</p>
                        <p className="text-dark-muted text-sm">1 hour ago</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white/10 rounded-lg text-dark-muted hover:text-white transition-all">
                        <Check size={18} />
                    </button>
                </div>
            </div>
        </div>

        <div>
            <h3 className="text-dark-muted font-semibold text-sm uppercase tracking-wider mb-3 px-2">Yesterday</h3>
            <div className="space-y-2">
                <div className="group hover:bg-dark-card/50 p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all">
                    <div className="w-12 h-12 bg-dark-card rounded-lg flex items-center justify-center text-blue-400">
                        <Moon size={24} />
                    </div>
                    <div className="flex-1">
                        <p className="text-dark-text font-medium">Points Earned: +50</p>
                        <p className="text-dark-muted text-sm">3 hours ago</p>
                    </div>
                </div>

                <div className="group hover:bg-dark-card/50 p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all">
                    <div className="w-12 h-12 bg-dark-card rounded-lg flex items-center justify-center text-green-400">
                        <MessageSquare size={24} />
                    </div>
                    <div className="flex-1">
                        <p className="text-dark-text font-medium">New comment on your solution</p>
                        <p className="text-dark-muted text-sm">22 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;