import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ShoppingCart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-harvest-green-light flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-harvest-green" />
              </div>
              <span className="ml-2 text-xl font-display font-bold text-harvest-green-dark">Harvest Hub</span>
            </div>
            <p className="text-gray-600 mb-4">
              Making wholesale produce ordering simple, efficient, and affordable for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-harvest-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-harvest-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-harvest-green transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-600 hover:text-harvest-green transition-colors">Home</a>
              </li>
              <li>
                <a href="/browse" className="text-gray-600 hover:text-harvest-green transition-colors">Browse Products</a>
              </li>
              <li>
                <a href="/track" className="text-gray-600 hover:text-harvest-green transition-colors">Track Order</a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-harvest-green transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-harvest-green transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="/vegetables" className="text-gray-600 hover:text-harvest-green transition-colors">Vegetables</a>
              </li>
              <li>
                <a href="/fruits" className="text-gray-600 hover:text-harvest-green transition-colors">Fruits</a>
              </li>
              <li>
                <a href="/organics" className="text-gray-600 hover:text-harvest-green transition-colors">Organic Produce</a>
              </li>
              <li>
                <a href="/seasonal" className="text-gray-600 hover:text-harvest-green transition-colors">Seasonal Items</a>
              </li>
              <li>
                <a href="/packages" className="text-gray-600 hover:text-harvest-green transition-colors">Mixed Packages</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-harvest-green mr-2 mt-0.5" />
                <span className="text-gray-600">123 Harvest Lane, Fresno, CA 93650</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-harvest-green mr-2" />
                <a href="tel:+15559876543" className="text-gray-600 hover:text-harvest-green">+1 (555) 987-6543</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-harvest-green mr-2" />
                <a href="mailto:info@harvesthub.com" className="text-gray-600 hover:text-harvest-green">info@harvesthub.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Harvest Hub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/terms" className="text-sm text-gray-500 hover:text-harvest-green">Terms of Service</a>
            <a href="/privacy" className="text-sm text-gray-500 hover:text-harvest-green">Privacy Policy</a>
            <a href="/faq" className="text-sm text-gray-500 hover:text-harvest-green">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
