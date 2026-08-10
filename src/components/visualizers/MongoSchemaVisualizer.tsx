import React, { useState } from 'react';
import { Database, Code2, Play, CheckCircle2, ShieldAlert } from 'lucide-react';

export const MongoSchemaVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'schema' | 'query' | 'document'>('query');
  const [softDeleteEnabled, setSoftDeleteEnabled] = useState(true);
  const [queryResults, setQueryResults] = useState([
    {
      _id: '65f8a01b22e',
      username: 'alex_builder',
      email: 'alex@example.com',
      role: 'admin',
      isDeleted: false,
      createdAt: '2026-08-01T14:32:10Z'
    },
    {
      _id: '65f8a01b22f',
      username: 'sarah_dev',
      email: 'sarah@zenuxs.in',
      role: 'developer',
      isDeleted: false,
      createdAt: '2026-08-03T09:12:00Z'
    }
  ]);

  const simulateQuery = () => {
    // Flash simulate
    const base = [
      {
        _id: '65f8a01b22e',
        username: 'alex_builder',
        email: 'alex@example.com',
        role: 'admin',
        isDeleted: false,
        createdAt: '2026-08-01T14:32:10Z'
      },
      {
        _id: '65f8a01b22f',
        username: 'sarah_dev',
        email: 'sarah@zenuxs.in',
        role: 'developer',
        isDeleted: false,
        createdAt: '2026-08-03T09:12:00Z'
      }
    ];

    if (!softDeleteEnabled) {
      base.push({
        _id: '65f8a01b230',
        username: 'archived_user',
        email: 'legacy@domain.com',
        role: 'member',
        isDeleted: true,
        createdAt: '2026-07-20T11:00:00Z'
      });
    }

    setQueryResults(base);
  };

  return (
    <div className="w-full rounded-xl border border-border bg-graphite p-5 sm:p-6 shadow-2xl space-y-5">
      {/* Visualizer Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-emerald/10 border border-emerald/20 text-emerald">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Easy-Mongoo — Declarative Schema & ODM
            </h4>
            <p className="text-xs text-ash font-mono">Simplified MongoDB Wrapper for Node.js</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSoftDeleteEnabled(!softDeleteEnabled);
              simulateQuery();
            }}
            className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border transition-colors ${
              softDeleteEnabled
                ? 'bg-emerald/10 border-emerald/30 text-emerald'
                : 'bg-iron border-border text-ash'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Soft-Delete Filter: {softDeleteEnabled ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* Mode Navigation */}
      <div className="flex space-x-2 border-b border-border/40 pb-2">
        <button
          onClick={() => setActiveTab('query')}
          className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
            activeTab === 'query'
              ? 'bg-iron text-white font-bold border border-border'
              : 'text-ash hover:text-fog'
          }`}
        >
          1. Chained Query
        </button>
        <button
          onClick={() => setActiveTab('schema')}
          className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
            activeTab === 'schema'
              ? 'bg-iron text-white font-bold border border-border'
              : 'text-ash hover:text-fog'
          }`}
        >
          2. Schema Definition
        </button>
        <button
          onClick={() => setActiveTab('document')}
          className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
            activeTab === 'document'
              ? 'bg-iron text-white font-bold border border-border'
              : 'text-ash hover:text-fog'
          }`}
        >
          3. MongoDB Output
        </button>
      </div>

      {/* Code / Output Canvas */}
      <div className="rounded-lg bg-void border border-border p-4 font-mono text-xs overflow-x-auto min-h-[220px]">
        {activeTab === 'query' && (
          <div className="space-y-3">
            <div className="text-fog">
              <span className="text-indigo font-bold">// Fluent asynchronous query with automatic soft-delete hook</span>
              <pre className="text-white mt-1">
{`const users = await User.find({ role: 'developer' })
  .populate('teams')
  .sort({ createdAt: -1 })
  .paginate({ page: 1, limit: 10 });`}
              </pre>
            </div>
            <div className="pt-2 border-t border-border/40 flex items-center justify-between">
              <span className="text-ash text-[11px]">Returns typed TypeScript models with zero overhead</span>
              <button
                onClick={simulateQuery}
                className="flex items-center gap-1 text-xs bg-emerald text-black font-bold px-3 py-1 rounded hover:bg-emerald/90 transition-colors"
              >
                <Play className="w-3 h-3 fill-black" /> Run Query
              </button>
            </div>
          </div>
        )}

        {activeTab === 'schema' && (
          <div className="text-fog space-y-2">
            <span className="text-indigo font-bold">// TypeScript-backed declarative schema with built-in auditing</span>
            <pre className="text-white">
{`import { Schema, Model } from 'easy-mongoo';

const UserSchema = new Schema({
  username: { type: String, required: true, trim: true },
  email:    { type: String, required: true, unique: true },
  role:     { type: String, enum: ['admin', 'developer', 'member'], default: 'member' },
  metadata: { type: Object, default: {} }
}, {
  timestamps: true,
  softDelete: true // Transparently injects isDeleted field & pre-find filter
});

export const User = new Model('User', UserSchema);`}
            </pre>
          </div>
        )}

        {activeTab === 'document' && (
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[11px] text-steel">
              <span>Collection: users ({queryResults.length} records returned)</span>
              <span className="text-emerald">JSON BSON Validated</span>
            </div>
            <pre className="text-emerald text-xs">
              {JSON.stringify(queryResults, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* Key Architectural Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-ash">
        <div className="p-2.5 rounded bg-carbon border border-border/80">
          <span className="text-white font-semibold block mb-0.5">ACID Transactions</span>
          <span>Automatic session rollback on uncaught errors.</span>
        </div>
        <div className="p-2.5 rounded bg-carbon border border-border/80">
          <span className="text-white font-semibold block mb-0.5">Zero Mongoose Bloat</span>
          <span>Lightweight native MongoDB driver bindings.</span>
        </div>
        <div className="p-2.5 rounded bg-carbon border border-border/80">
          <span className="text-white font-semibold block mb-0.5">TypeScript First</span>
          <span>Full autocompletion for queries and nested fields.</span>
        </div>
      </div>
    </div>
  );
};
