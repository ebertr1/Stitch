import React from 'react';
import { LayoutDashboard, Code2, Trophy, User, Bell, Settings, LogOut, Terminal } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  onLogout: () => void;
  isAdmin?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, onLogout, isAdmin }) => {
  const menuItems = [
    { id: ViewState.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: ViewState.CHALLENGES, label: 'Challenges', icon: Code2 },
    { id: ViewState.NOTIFICATIONS, label: 'Notifications', icon: Bell },
    { id: ViewState.PROFILE, label: 'Profile', icon: User },
    ...(isAdmin ? [{ id: ViewState.ADMIN, label: 'Admin', icon: Settings }] : []),
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-dark-card border-r border-dark-border h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
          <Terminal size={20} />
        </div>
        <h1 className="text-lg font-bold text-white tracking-tight">CodeQuest</h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onChangeView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              currentView === item.id
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-dark-muted hover:text-white hover:bg-dark-bg'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-dark-border">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;