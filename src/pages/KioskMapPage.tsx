import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

function KioskMapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <Link to="/">
          <Button variant="outline" className="absolute top-4 left-4 border-blue-200 text-blue-800 hover:bg-blue-50">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find a QuickSight Kiosk in Paris
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Our kiosks are conveniently located across Paris. Find us in:
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Pharmacies</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">School Campuses</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Glasses Retailers</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Shopping Malls</span>
        </div>

        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg border border-blue-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.1197637394566!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sfr!4v1678343989000!5m2!1sen!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Paris Kiosks"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default KioskMapPage;
