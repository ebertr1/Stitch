import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { Share2, Edit3, Award, Zap, Star, Code2, Heart } from 'lucide-react';

const activityData = [
  { name: '1', value: 30 },
  { name: '2', value: 60 },
  { name: '3', value: 45 },
  { name: '4', value: 90 },
  { name: '5', value: 70 },
  { name: '6', value: 110 },
  { name: '7', value: 140 },
  { name: '8', value: 80 },
];

const Profile: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 animate-in fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="relative">
                <img 
                    src="https://picsum.photos/seed/alex/200/200" 
                    alt="Alex Doe" 
                    className="w-32 h-32 rounded-full border-4 border-dark-card shadow-2xl"
                />
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 border-4 border-dark-bg rounded-full"></div>
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
                <h1 className="text-3xl font-bold text-white">Alex Doe</h1>
                <p className="text-dark-muted">@CodeWarrior123 • Level 15 Grandmaster</p>
                <div className="flex justify-center md:justify-start gap-3 mt-4">
                    <button className="px-4 py-2 bg-dark-card border border-dark-border text-white rounded-lg font-bold text-sm hover:bg-dark-border transition-colors flex items-center gap-2">
                        <Edit3 size={16} /> Edit Profile
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary-dark transition-colors flex items-center gap-2">
                        <Share2 size={16} /> Share Profile
                    </button>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
                { label: 'Completed Challenges', value: '128' },
                { label: 'Total Points', value: '15,600' },
                { label: 'Current Streak', value: '42 Days' },
            ].map((stat, i) => (
                <div key={i} className="bg-dark-card border border-dark-border p-6 rounded-xl">
                    <p className="text-dark-muted mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Badges */}
            <div className="lg:col-span-1 space-y-4">
                <h3 className="text-lg font-bold text-white">Badges & Achievements</h3>
                <div className="bg-dark-card border border-dark-border rounded-xl p-6">
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { icon: Award, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
                            { icon: Zap, color: 'text-purple-400', bg: 'bg-purple-400/10' },
                            { icon: Star, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                            { icon: Flame, color: 'text-orange-400', bg: 'bg-orange-400/10' },
                            { icon: Code2, color: 'text-green-400', bg: 'bg-green-400/10' },
                            { icon: Heart, color: 'text-red-400', bg: 'bg-red-400/10' },
                        ].map((Badge, i) => (
                            <div key={i} className={`aspect-square rounded-full ${Badge.bg} flex items-center justify-center ${Badge.color} hover:scale-110 transition-transform cursor-pointer`}>
                                <Badge.icon size={32} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="lg:col-span-2 space-y-4">
                <h3 className="text-lg font-bold text-white">Points History (Last 30 Days)</h3>
                <div className="bg-dark-card border border-dark-border rounded-xl p-6 h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={activityData}>
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#161B22', borderColor: '#30363D', borderRadius: '8px' }}
                                cursor={{fill: '#30363D', opacity: 0.4}}
                            />
                            <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* Recent Solves Table */}
        <div className="mt-10 space-y-4">
            <h3 className="text-lg font-bold text-white">Recently Solved</h3>
            <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-dark-bg/50 border-b border-dark-border text-dark-muted">
                        <tr>
                            <th className="p-4 font-medium">Challenge</th>
                            <th className="p-4 font-medium">Difficulty</th>
                            <th className="p-4 font-medium">Language</th>
                            <th className="p-4 font-medium text-right">Points</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-dark-border">
                        {[
                            { name: 'Two Sum', diff: 'Easy', lang: 'JavaScript', pts: 100 },
                            { name: 'Reverse String', diff: 'Easy', lang: 'Python', pts: 120 },
                            { name: 'Valid Palindrome', diff: 'Medium', lang: 'Java', pts: 250 },
                            { name: 'Binary Tree Sort', diff: 'Hard', lang: 'C++', pts: 500 },
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-dark-bg/50 transition-colors">
                                <td className="p-4 text-white font-medium">{row.name}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-0.5 rounded text-xs border ${
                                        row.diff === 'Easy' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                        row.diff === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                        'bg-red-500/10 text-red-400 border-red-500/20'
                                    }`}>{row.diff}</span>
                                </td>
                                <td className="p-4 text-dark-text">{row.lang}</td>
                                <td className="p-4 text-right text-dark-text font-mono">{row.pts}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};
// Helper imports for badge mapping
import { Flame } from 'lucide-react';

export default Profile;