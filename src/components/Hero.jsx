import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-harvest-green-light/40 to-white pt-8 pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fresh Produce, <br />
              <span className="text-harvest-green">Wholesale Prices</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              Simplify your bulk ordering of fresh vegetables and fruits. 
              Connect directly with local farmers and suppliers for the 
              freshest produce at the best prices.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/browse" className="btn-primary bg-harvest-green hover:bg-harvest-green-dark text-white flex items-center justify-center group">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/track" className="btn-secondary flex items-center justify-center">
                Track Order
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="font-bold text-xl text-harvest-green">100+</div>
                <div className="text-sm text-gray-600">Local Suppliers</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="font-bold text-xl text-harvest-green">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="font-bold text-xl text-harvest-green">24h</div>
                <div className="text-sm text-gray-600">Fast Delivery</div>
              </div>
            </div>
          </div>
          
          {/* Right side image */}
          <div className="w-full lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Fresh vegetables being delivered" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 -right-6 bg-white rounded-xl shadow-lg p-3 animate-bounce-subtle">
              <img 
                src="https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80" 
                alt="Fresh vegetables" 
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>
            <div className="absolute bottom-10 -left-6 bg-white rounded-xl shadow-lg p-3 animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
              <img 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80" 
                alt="Fresh fruits" 
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
