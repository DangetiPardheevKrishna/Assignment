import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search, User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 bg-white/95 sticky top-0 z-50 shadow-sm backdrop-blur-sm">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-[#2E7D32]">
              <div className="w-10 h-10 rounded-full bg-[#E6F4EA] flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-[#2E7D32]" />
              </div>
              <span className="ml-2 text-xl text-[#2E7D32] font-display font-bold">Harvest Hub</span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-foreground/80 hover:text-harvest-green transition-colors">
              Features
            </a>
            <a href="/#how-it-works" className="text-foreground/80 hover:text-harvest-green transition-colors">
              How It Works
            </a>
            <a href="/#testimonials" className="text-foreground/80 hover:text-harvest-green transition-colors">
              Testimonials
            </a>
            <a href="/#contact" className="text-foreground/80 hover:text-harvest-green transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-foreground/80 hover:text-harvest-green transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="flex items-center text-foreground/80 hover:text-harvest-green transition-colors">
              <User className="h-5 w-5" />
            </button>
            <Link 
              to="/browse" 
              className="btn-primary bg-harvest-green hover:bg-harvest-green-dark"
            >
              Browse Products
            </Link>
            <Link 
              to="/admin" 
              className="btn-secondary flex items-center gap-1"
            >
              <Settings size={16} />
              Admin Panel
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-foreground/80 hover:text-harvest-green"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden mt-4 px-4 pb-4 z-50",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="flex flex-col space-y-4 pt-2">
            <a 
              href="/#features"
              className="text-foreground/80 hover:text-harvest-green py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="/#how-it-works"
              className="text-foreground/80 hover:text-harvest-green py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="/#testimonials"
              className="text-foreground/80 hover:text-harvest-green py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="/#contact"
              className="text-foreground/80 hover:text-harvest-green py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Link 
                to="/browse" 
                className="btn-primary bg-harvest-green hover:bg-harvest-green-dark text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Products
              </Link>
              <Link 
                to="/track" 
                className="btn-secondary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Track Order
              </Link>
              <Link 
                to="/admin" 
                className="btn-secondary flex items-center justify-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Settings size={16} />
                Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
