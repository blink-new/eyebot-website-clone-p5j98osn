import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Eye, Zap, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <Button variant="ghost" className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <img src="/quicksight_logo.png" alt="QuickSight Logo" className="h-10 w-auto mr-2" />
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Discover QuickSight
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Future of <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Vision Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            QuickSight brings AI-powered vision testing and prescription services to everyone, everywhere. Experience fast, accurate, and accessible eye care—right where you are.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-4 mb-4 shadow-lg">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Vision Testing</h3>
            <p className="text-gray-600">Our advanced AI analyzes your vision in seconds, providing accurate results and instant prescriptions—no waiting, no hassle.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-4 mb-4 shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast & Convenient</h3>
            <p className="text-gray-600">Get tested and receive your prescription in under 2 minutes. Visit a QuickSight kiosk at pharmacies, campuses, or retailers near you.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 mb-4 shadow-lg">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clinically Verified Accuracy</h3>
            <p className="text-gray-600">Our technology is validated by optometrists and meets the highest standards for safety and precision. Your eye health is in good hands.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl p-4 mb-4 shadow-lg">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accessible Everywhere</h3>
            <p className="text-gray-600">QuickSight kiosks are available in pharmacies, schools, and retailers across Paris—making vision care accessible to all.</p>
          </div>
        </div>
        <div className="bg-white/90 rounded-2xl shadow-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Why Choose QuickSight?</h2>
          <ul className="text-gray-700 text-lg space-y-3">
            <li>• <span className="font-semibold text-blue-800">Instant Results:</span> No more waiting for appointments or lab results.</li>
            <li>• <span className="font-semibold text-blue-800">Trusted by Professionals:</span> Backed by leading optometrists and clinics.</li>
            <li>• <span className="font-semibold text-blue-800">Affordable & Transparent:</span> Clear pricing, no hidden fees.</li>
            <li>• <span className="font-semibold text-blue-800">Your Data, Your Privacy:</span> We protect your health information with industry-leading security.</li>
          </ul>
        </div>
        <div className="text-center">
          <Link to="/kiosk-map">
            <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
              <MapPin className="h-5 w-5 mr-2" />
              Find a Kiosk Near You
            </Button>
          </Link>
        </div>
        <section className="mt-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl p-12 text-center text-white">
          <img src="/QuickSightTeam.png" alt="QuickSight Staff Team" className="mx-auto mb-8 max-w-full rounded-full shadow-lg" />
          <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-extrabold uppercase">Clarisse Rivaud</h3>
              <p className="text-lg">Sales Manager</p>
            </div>
            <div>
              <h3 className="text-xl font-extrabold uppercase">Oumar Cisse</h3>
              <p className="text-lg">CTO and AI Expert</p>
            </div>
            <div>
              <h3 className="text-xl font-extrabold uppercase">Marine Stettin</h3>
              <p className="text-lg">CSR Manager</p>
            </div>
            <div>
              <h3 className="text-xl font-extrabold uppercase">Valentin Sagodira</h3>
              <p className="text-lg">Ophtamologic Expert</p>
            </div>
            <div>
              <h3 className="text-xl font-extrabold uppercase">Julian Vallée</h3>
              <p className="text-lg">CEO</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}