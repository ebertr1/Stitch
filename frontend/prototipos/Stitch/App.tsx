import React, { useState } from 'react';
import { ViewState } from './types';
import Sidebar from './components/Sidebar';

// Screens
import Landing from './screens/Landing';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import ChallengeDetail from './screens/ChallengeDetail';
import History from './screens/History';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import Admin from './screens/Admin';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LANDING);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentView(ViewState.DASHBOARD);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView(ViewState.LANDING);
  };

  if (currentView === ViewState.LANDING) {
    return <Landing onLogin={() => setCurrentView(ViewState.LOGIN)} />;
  }

  if (currentView === ViewState.LOGIN) {
    return <Login onSuccess={handleLogin} />;
  }

  if (currentView === ViewState.CHALLENGE_DETAIL) {
    return <ChallengeDetail onBack={() => setCurrentView(ViewState.CHALLENGES)} />;
  }

  // Layout for authenticated routes
  return (
    <div className="flex min-h-screen bg-dark-bg text-dark-text font-sans">
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView} 
        onLogout={handleLogout}
        isAdmin={true}
      />
      <main className="flex-1 overflow-y-auto h-screen scroll-smooth">
        {currentView === ViewState.DASHBOARD && (
            <Dashboard onStartChallenge={() => setCurrentView(ViewState.CHALLENGE_DETAIL)} />
        )}
        {currentView === ViewState.CHALLENGES && <History />}
        {currentView === ViewState.NOTIFICATIONS && <Notifications />}
        {currentView === ViewState.PROFILE && <Profile />}
        {currentView === ViewState.ADMIN && <Admin />}
      </main>
    </div>
  );
};

export default App;