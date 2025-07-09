import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Eye, History, Home } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'prescription-history', label: 'My Prescriptions', icon: History },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/quicksight_logo.png" 
              alt="QuickSight Logo" 
              className="h-12 w-auto mr-2"
            />
            <nav className="hidden md:flex space-x-8 ml-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onPageChange('prescription-history')}
              className="hidden md:flex"
            >
              <Eye className="h-4 w-4 mr-2" />
              My Health
            </Button>
            <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
              Start New Test
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;