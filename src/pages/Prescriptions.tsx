import React from 'react';

const fakePrescriptions = [
  {
    id: 1,
    date: '2024-07-01',
    leftEye: -2.25,
    rightEye: -1.75,
    notes: 'Stable. No significant change.'
  },
  {
    id: 2,
    date: '2023-12-15',
    leftEye: -2.00,
    rightEye: -1.50,
    notes: 'Slight improvement in right eye.'
  },
  {
    id: 3,
    date: '2023-06-10',
    leftEye: -2.00,
    rightEye: -1.25,
    notes: 'Initial prescription.'
  }
];

export default function Prescriptions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">My Prescriptions</h1>
        <p className="text-gray-600 mb-8">Track your eye health and prescription history over time.</p>
        <div className="space-y-6">
          {fakePrescriptions.map((rx, i) => (
            <div key={rx.id} className="bg-white/90 border border-blue-100 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row md:items-center justify-between hover:shadow-xl transition-all duration-200">
              <div>
                <div className="text-lg font-semibold text-blue-900 mb-1">{new Date(rx.date).toLocaleDateString()}</div>
                <div className="flex gap-6 text-blue-800 mb-2">
                  <span>👁️ Left: <span className="font-bold">{rx.leftEye}</span></span>
                  <span>👁️ Right: <span className="font-bold">{rx.rightEye}</span></span>
                </div>
                <div className="text-sm text-gray-500">{rx.notes}</div>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs px-4 py-2 rounded-full font-semibold shadow">{i === 0 ? 'Current' : 'Previous'}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-gray-400 text-xs">* This is a demo. Data is not real medical advice.</div>
      </div>
    </div>
  );
}
