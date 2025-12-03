import React from 'react';
import { Search, Filter, MoreHorizontal, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { Challenge } from '../types';

const challenges: Challenge[] = [
  { id: '1', title: 'Valid Palindrome', difficulty: 'Easy', time: '15:32 min', points: 150, status: 'Completed', language: 'JavaScript', date: '2 days ago' },
  { id: '2', title: 'Dijkstra Algorithm', difficulty: 'Hard', time: '45:10 min', points: 50, status: 'Failed', language: 'Python', date: '5 days ago' },
  { id: '3', title: 'Invert Binary Tree', difficulty: 'Medium', time: '22:05 min', points: 250, status: 'Completed', language: 'TypeScript', date: '1 week ago' },
  { id: '4', title: 'Two Sum', difficulty: 'Easy', time: '08:15 min', points: 100, status: 'Completed', language: 'Go', date: '1 week ago' },
  { id: '5', title: 'Bubble Sort', difficulty: 'Medium', time: '31:40 min', points: 20, status: 'Failed', language: 'Java', date: '2 weeks ago' },
];

const History: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 animate-in fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Challenge History</h1>
            <p className="text-dark-muted">Track your past submissions and performance.</p>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-muted" size={18} />
                <input 
                    type="text" 
                    placeholder="Search challenges..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-card border border-dark-border rounded-lg text-white placeholder-dark-muted focus:outline-none focus:border-primary transition-colors"
                />
            </div>
            <button className="px-4 py-2.5 bg-dark-card border border-dark-border rounded-lg text-dark-text hover:text-white hover:border-dark-muted transition-colors flex items-center gap-2">
                <Filter size={18} />
                Filter
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
            { label: 'Challenges Solved', value: '28', sub: 'Total' },
            { label: 'Average Score', value: '185', sub: 'Points' },
            { label: 'Time Spent', value: '12h 45m', sub: 'Coding' }
        ].map((stat, i) => (
            <div key={i} className="bg-dark-card border border-dark-border rounded-xl p-6">
                <p className="text-dark-muted font-medium mb-2">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                    <span className="text-sm text-dark-muted">{stat.sub}</span>
                </div>
            </div>
        ))}
      </div>

      <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
        <table className="w-full text-left">
            <thead className="bg-dark-bg/50 text-dark-muted text-sm uppercase">
                <tr>
                    <th className="p-4 font-semibold">Challenge</th>
                    <th className="p-4 font-semibold text-center">Difficulty</th>
                    <th className="p-4 font-semibold text-center">Time</th>
                    <th className="p-4 font-semibold text-center">Points</th>
                    <th className="p-4 font-semibold text-center">Status</th>
                    <th className="p-4 font-semibold"></th>
                </tr>
            </thead>
            <tbody className="divide-y divide-dark-border">
                {challenges.map((challenge) => (
                    <tr key={challenge.id} className="hover:bg-dark-bg/50 transition-colors">
                        <td className="p-4">
                            <p className="font-bold text-white">{challenge.title}</p>
                            <p className="text-xs text-dark-muted">{challenge.language} • {challenge.date}</p>
                        </td>
                        <td className="p-4 text-center">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                                challenge.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                challenge.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                'bg-red-500/10 text-red-400 border-red-500/20'
                            }`}>
                                {challenge.difficulty}
                            </span>
                        </td>
                        <td className="p-4 text-center text-dark-text font-mono text-sm">{challenge.time}</td>
                        <td className="p-4 text-center">
                            <span className={`font-bold ${challenge.status === 'Completed' ? 'text-green-400' : 'text-red-400'}`}>
                                {challenge.status === 'Completed' ? '+' : ''}{challenge.points} pts
                            </span>
                        </td>
                        <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                                {challenge.status === 'Completed' ? (
                                    <>
                                        <CheckCircle2 size={18} className="text-green-400" />
                                        <span className="text-sm font-medium text-white">Solved</span>
                                    </>
                                ) : (
                                    <>
                                        <XCircle size={18} className="text-red-400" />
                                        <span className="text-sm font-medium text-white">Failed</span>
                                    </>
                                )}
                            </div>
                        </td>
                        <td className="p-4 text-right">
                            <button className="p-2 hover:bg-dark-border rounded-lg text-dark-muted hover:text-white transition-colors">
                                <MoreHorizontal size={20} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        {/* Pagination */}
        <div className="p-4 border-t border-dark-border flex items-center justify-between">
            <button className="px-4 py-2 text-sm font-medium text-dark-muted hover:text-white disabled:opacity-50">Previous</button>
            <div className="flex gap-1">
                <button className="w-8 h-8 rounded bg-primary text-white text-sm font-bold">1</button>
                <button className="w-8 h-8 rounded hover:bg-dark-bg text-dark-muted hover:text-white text-sm">2</button>
                <button className="w-8 h-8 rounded hover:bg-dark-bg text-dark-muted hover:text-white text-sm">3</button>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-dark-muted hover:text-white">Next</button>
        </div>
      </div>
    </div>
  );
};

export default History;