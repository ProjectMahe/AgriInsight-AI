import React from 'react';
import { Link } from 'react-router-dom';
import { Plane as Plant, Cloud, FlaskRound as Flask, Droplets, ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center">
                <Plant className="h-8 w-8 text-primary-500" />
                <span className="ml-2 text-xl font-bold text-primary-600">AgriInsight AI</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#features" className="text-base font-medium text-gray-700 hover:text-primary-600">
                Features
              </a>
              <a href="#benefits" className="text-base font-medium text-gray-700 hover:text-primary-600">
                Benefits
              </a>
              <a href="#testimonials" className="text-base font-medium text-gray-700 hover:text-primary-600">
                Testimonials
              </a>
              <a href="#pricing" className="text-base font-medium text-gray-700 hover:text-primary-600">
                Pricing
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link to="/app" className="btn btn-primary ml-8">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="md:flex md:items-center md:space-x-12">
              <div className="md:w-1/2 md:pr-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-primary-600">AI-Powered</span>
                  <span className="block">Agriculture Solutions</span>
                </h1>
                <p className="mt-6 text-xl text-gray-700 max-w-3xl">
                  Revolutionize your farming with cutting-edge AI technology. Get real-time insights, predict crop health, optimize resources, and maximize yields.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/app" className="btn btn-primary px-8 py-3 text-lg">
                    Start Using AI Today
                  </Link>
                  <a href="#features" className="btn btn-outline px-8 py-3 text-lg">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="mt-12 md:mt-0 md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Smart farming with technology"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Revolutionize Your Farming with AI
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                Our comprehensive suite of AI-powered tools helps you make data-driven decisions.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-105">
                  <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-xl">
                    <Plant className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Crop Health Monitoring</h3>
                  <p className="mt-2 text-gray-600">
                    AI-powered disease detection and growth tracking for early intervention and healthier crops.
                  </p>
                </div>
                
                <div className="bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-105">
                  <div className="inline-flex items-center justify-center p-3 bg-secondary-100 rounded-xl">
                    <Cloud className="h-8 w-8 text-secondary-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Weather Forecasting</h3>
                  <p className="mt-2 text-gray-600">
                    Advanced weather prediction and analysis to optimize planting and harvesting schedules.
                  </p>
                </div>
                
                <div className="bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-105">
                  <div className="inline-flex items-center justify-center p-3 bg-earth-100 rounded-xl">
                    <Flask className="h-8 w-8 text-earth-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Soil Analysis</h3>
                  <p className="mt-2 text-gray-600">
                    Detailed soil quality assessments and personalized fertilizer recommendations.
                  </p>
                </div>
                
                <div className="bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-105">
                  <div className="inline-flex items-center justify-center p-3 bg-success-100 rounded-xl">
                    <Droplets className="h-8 w-8 text-success-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Resource Optimization</h3>
                  <p className="mt-2 text-gray-600">
                    Smart irrigation and resource management to reduce waste and increase efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to boost your farm's productivity?</span>
              <span className="block text-primary-200">Start using AI technology today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link to="/app" className="btn bg-white text-primary-600 hover:bg-gray-100 px-6 py-3">
                  Get Started <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Crop Monitoring</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Weather Analysis</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Soil Management</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Resource Optimization</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Guides</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">API Status</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Data Protection</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-center text-base text-gray-400">
              &copy; 2025 AgriInsight AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;