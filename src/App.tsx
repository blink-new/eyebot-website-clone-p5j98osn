import React from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Eye, ScanLine, CheckCircle, Loader2, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/quicksight_logo.png" 
                alt="QuickSight Logo" 
                className="h-12 w-auto mr-2"
              />
            </div>
            <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c-4.418 0-8-4.03-8-9 0-4.97 3.582-9 8-9s8 4.03 8 9c0 4.97-3.582 9-8 9z" /></svg>
              Find a kiosk
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-sky-100 rounded-full text-blue-800 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Vision Testing
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                VISION CARE AT THE{' '}
                <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                  SPEED OF SIGHT
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                90‑second vision tests and eyewear prescriptions at the touch of a button. 
                Experience the future of eye care with cutting-edge AI technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kiosk-map">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c-4.418 0-8-4.03-8-9 0-4.97 3.582-9 8-9s8 4.03 8 9c0 4.97-3.582 9-8 9z" /></svg>
                  Find a kiosk
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-200 text-blue-800 hover:bg-blue-50 px-8 py-4 text-lg rounded-full border-2"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="h-4 w-4 mr-2 text-green-600" />
                FDA Approved
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                90 Second Test
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                99.7% Accuracy
              </div>
            </div>
          </div>

          {/* Right side - Vision Test Interface */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-sky-400/20 rounded-3xl blur-xl"></div>
            
            <Card className="relative bg-white border border-blue-100 p-8 shadow-2xl rounded-2xl backdrop-blur-sm">
              
              {/* User Avatar */}
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-full flex items-center justify-center ring-4 ring-blue-50">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Patient</div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Test in progress...</div>
                </div>
              </div>

              {/* Test Results */}
              <div className="space-y-3">
                
                {/* Scanning Frame */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl border border-blue-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-3">
                      <ScanLine className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Scanning Frame</span>
                  </div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse shadow-lg"></div>
                </div>

                {/* Astigmatism Detected */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-yellow-100 rounded-xl border border-amber-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Astigmatism Detected</span>
                  </div>
                  <div className="w-3 h-3 bg-amber-500 rounded-full shadow-lg"></div>
                </div>

                {/* Test in Progress */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-slate-100 rounded-xl border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                      <Loader2 className="h-4 w-4 text-white animate-spin" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Test in Progress (65%)</span>
                  </div>
                  <div className="w-20 bg-gray-200 rounded-full h-2 shadow-inner">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-2 rounded-full shadow-sm transition-all duration-300" style={{ width: '65%' }}></div>
                  </div>
                </div>

                {/* Prescription Found */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl border border-green-200">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Prescription found!</span>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                </div>

              </div>

              {/* Test Summary */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">Prescription Results</div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Left Eye</div>
                    <div className="font-bold text-lg text-blue-900">-2.25</div>
                    <div className="text-xs text-gray-500">SPH</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Right Eye</div>
                    <div className="font-bold text-lg text-blue-900">-1.75</div>
                    <div className="text-xs text-gray-500">SPH</div>
                  </div>
                </div>
              </div>

            </Card>
          </div>

        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-sky-100 rounded-full text-blue-800 text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Why Choose QuickSight
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced AI Vision Testing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of eye care with our cutting-edge technology that delivers 
              professional-grade results in minutes, not hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-200 border-0 bg-gradient-to-br from-blue-50 to-sky-50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Instant Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get accurate vision assessment results in under 90 seconds using advanced AI algorithms 
                trained on millions of eye examinations.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all duration-200 border-0 bg-gradient-to-br from-sky-50 to-blue-50">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ScanLine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Precise Scanning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our proprietary scanning technology detects even the smallest vision irregularities 
                with 99.7% accuracy rate.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all duration-200 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Verified Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All prescriptions are verified by licensed optometrists and backed by our 
                satisfaction guarantee.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Vision Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've experienced the future of eye care. 
            Start your 90-second vision test today.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/quicksight_logo.png" 
                  alt="QuickSight Logo" 
                  className="h-10 w-auto mr-2 filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Revolutionizing vision care with AI-powered testing technology. 
                Get accurate prescriptions in 90 seconds, anywhere, anytime.
              </p>
              <div className="text-sm text-gray-500">
                &copy; 2024 QuickSight. All rights reserved.
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Vision Test</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accuracy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;