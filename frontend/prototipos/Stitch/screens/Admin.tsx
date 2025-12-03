import React from 'react';
import { Search, PlusCircle, MoreHorizontal } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Admin: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 animate-in fade-in">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <h1 className="text-3xl font-bold text-white">Challenge Management</h1>
            <div className="flex gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-muted" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search challenges..." 
                        className="w-full pl-10 pr-4 py-2 bg-dark-card border border-dark-border rounded-lg text-white focus:outline-none focus:border-primary"
                    />
                </div>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-bold transition-colors">
                    <PlusCircle size={18} />
                    Create Challenge
                </button>
            </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
                <p className="text-dark-muted text-sm font-medium">Total Challenges</p>
                <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-white">124</p>
                    <p className="text-green-500 text-sm font-bold mb-1">+12</p>
                </div>
            </div>
            <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
                <p className="text-dark-muted text-sm font-medium">Registered Users</p>
                <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-white">8,721</p>
                    <p className="text-green-500 text-sm font-bold mb-1">+5.2%</p>
                </div>
            </div>
            <div className="bg-dark-card border border-dark-border p-6 rounded-xl">
                <p className="text-dark-muted text-sm font-medium">Avg Resolution Rate</p>
                <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-white">68%</p>
                    <p className="text-red-500 text-sm font-bold mb-1">-1.5%</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table */}
            <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Challenge List</h2>
                </div>
                <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-dark-bg/50 text-dark-muted uppercase text-xs">
                            <tr>
                                <th className="p-4">Title</th>
                                <th className="p-4">Difficulty</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-dark-border">
                            {[
                                { title: 'Valid Palindrome', diff: 'Easy', status: 'Published' },
                                { title: 'Rotate Matrix', diff: 'Medium', status: 'Published' },
                                { title: 'Graph Search', diff: 'Hard', status: 'Draft' },
                                { title: 'Dijkstra', diff: 'Hard', status: 'Published' },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-dark-bg/50">
                                    <td className="p-4 font-medium text-white">{row.title}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-0.5 rounded text-xs border ${
                                            row.diff === 'Easy' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                            row.diff === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                            'bg-red-500/10 text-red-400 border-red-500/20'
                                        }`}>{row.diff}</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${row.status === 'Published' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                                            <span className="text-dark-text">{row.status}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="text-dark-muted hover:text-white"><MoreHorizontal size={18} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Charts Column */}
            <div className="space-y-8">
                <div className="bg-dark-card border border-dark-border rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4">User Activity (30 Days)</h3>
                    <div className="h-40">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={[
                                {v: 10}, {v: 25}, {v: 15}, {v: 35}, {v: 45}, {v: 60}, {v: 55}
                            ]}>
                                <Line type="monotone" dataKey="v" stroke="#6366F1" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4">Resolution Status</h3>
                    <div className="h-40 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={[{v: 68}, {v: 32}]} innerRadius={40} outerRadius={60} dataKey="v">
                                    <Cell fill="#6366F1" />
                                    <Cell fill="#374151" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                         <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                            <span className="text-2xl font-bold text-white">68%</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 text-sm mt-4">
                        <div className="flex items-center gap-2 text-dark-muted"><div className="w-3 h-3 bg-primary rounded-sm"></div> Solved</div>
                        <div className="flex items-center gap-2 text-dark-muted"><div className="w-3 h-3 bg-gray-700 rounded-sm"></div> Failed</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Admin;