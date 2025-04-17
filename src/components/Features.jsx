import React from 'react';
import { 
  ShoppingBag, 
  Truck, 
  BarChart3, 
  ClipboardCheck, 
  Users, 
  Clock 
} from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Better Way to Order Wholesale Produce
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you're a buyer looking for bulk produce or an admin managing orders,
            our platform makes it simple and efficient.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* For Buyers */}
            <div className="bg-harvest-cream rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-harvest-green-light rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-harvest-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Bulk Ordering</h3>
              <p className="text-gray-600">
                Place large orders with just a few clicks. Our platform is designed for volume purchasing with wholesale pricing.
              </p>
            </div>

            <div className="bg-harvest-cream rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-harvest-green-light rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-harvest-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">
                Keep tabs on your deliveries with real-time order tracking from warehouse to your doorstep.
              </p>
            </div>

            <div className="bg-harvest-cream rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-harvest-green-light rounded-full flex items-center justify-center mb-4">
                <ClipboardCheck className="h-6 w-6 text-harvest-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                All produce is quality-checked before shipping. Not satisfied? Our hassle-free returns make it right.
              </p>
            </div>

            {/* For Admins */}
            <div className="bg-harvest-orange-light rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-harvest-orange/20 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-harvest-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inventory Management</h3>
              <p className="text-gray-600">
                Powerful admin tools to manage your inventory, track stock levels, and get low-stock alerts.
              </p>
            </div>

            <div className="bg-harvest-orange-light rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-harvest-orange/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-harvest-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Insights</h3>
              <p className="text-gray-600">
                Gain valuable data on ordering patterns, preferred products, and customer behavior.
              </p>
            </div>

            <div className="bg-harvest-orange-light rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-harvest-orange/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-harvest-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Workflows</h3>
              <p className="text-gray-600">
                Streamline operations with automated order processing, invoicing, and delivery scheduling.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-harvest-green-light/50 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900">Ready to simplify your produce ordering?</h3>
              <p className="mt-2 text-gray-700">
                Join hundreds of businesses already saving time and money with our platform.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <a href="/browse" className="btn-primary bg-harvest-green hover:bg-harvest-green-dark text-white text-center whitespace-nowrap">
                Browse Products
              </a>
              <a href="/contact" className="btn-secondary text-center whitespace-nowrap">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
