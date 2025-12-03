import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Trophy, TrendingUp, Flame, CheckCircle2, Plus } from 'lucide-react';

const data = [
  { name: 'Mon', value: 34 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 38 },
  { name: 'Thu', value: 65 },
  { name: 'Fri', value: 48 },
  { name: 'Sat', value: 85 },
  { name: 'Sun', value: 72 },
];

const categoryData = [
  { name: 'Algorithms', value: 45 },
  { name: 'Frontend', value: 30 },
  { name: 'Backend', value: 25 },
];

const COLORS = ['#8B5CF6', '#3B82F6', '#10B981'];

interface DashboardProps {
    onStartChallenge: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartChallenge }) => {
  return (
    <div className="p-6 lg:p-10 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Hello, Alex! 👋</h1>
          <p className="text-dark-muted">Welcome back, ready for a new challenge?</p>
        </div>
        <button 
            onClick={onStartChallenge}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-primary/25 active:scale-95"
        >
          <Plus size={20} />
          Start New Challenge
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Points', value: '12,450', icon: Trophy, color: 'text-yellow-400' },
          { label: 'Current Level', value: 'Level 8', icon: TrendingUp, color: 'text-blue-400' },
          { label: 'Day Streak', value: '15 Days', icon: Flame, color: 'text-orange-400' },
          { label: 'Completed', value: '72', icon: CheckCircle2, color: 'text-green-400' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-dark-card border border-dark-border p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-dark-bg ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-dark-muted font-medium">{stat.label}</span>
            </div>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div className="bg-dark-card border border-dark-border p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-white">Progress to Level 9</h3>
          <span className="text-sm text-dark-muted">450 / 700 XP</span>
        </div>
        <div className="w-full h-3 bg-dark-bg rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-purple-500 w-[65%] rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-dark-card border border-dark-border p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#30363D" vertical={false} />
                <XAxis dataKey="name" stroke="#8B949E" axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#8B949E" axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#161B22', borderColor: '#30363D', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="bg-dark-card border border-dark-border p-6 rounded-2xl flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-white mb-4 w-full text-left">Category Breakdown</h3>
          <div className="h-[200px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <span className="text-3xl font-bold text-white">72</span>
                <span className="text-dark-muted text-sm">Total</span>
            </div>
          </div>
          <div className="w-full mt-6 space-y-3">
            {categoryData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="text-dark-muted">{item.name}</span>
                </div>
                <span className="text-white font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;