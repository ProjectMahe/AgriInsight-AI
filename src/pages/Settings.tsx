import React from 'react';
import { Settings as SettingsIcon, User, Bell, Globe, Shield, Database, HardDrive } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:grid md:grid-cols-3">
          {/* Sidebar */}
          <div className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 border-r">
            <nav className="space-y-1">
              <a href="#profile" className="bg-primary-50 text-primary-700 flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <User className="mr-3 h-5 w-5" />
                <span className="truncate">Profile</span>
              </a>
              <a href="#notifications" className="text-gray-700 hover:bg-gray-100 flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <Bell className="mr-3 h-5 w-5" />
                <span className="truncate">Notifications</span>
              </a>
              <a href="#preferences" className="text-gray-700 hover:bg-gray-100 flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <Globe className="mr-3 h-5 w-5" />
                <span className="truncate">Preferences</span>
              </a>
              <a href="#security" className="text-gray-700 hover:bg-gray-100 flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <Shield className="mr-3 h-5 w-5" />
                <span className="truncate">Security</span>
              </a>
              <a href="#farm-data" className="text-gray-700 hover:bg-gray-100 flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <Database className="mr-3 h-5 w-5" />
                <span className="truncate">Farm Data</span>
              </a>
              <a href="#system" className="text-gray-700 hover:bg-gray-100 flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <HardDrive className="mr-3 h-5 w-5" />
                <span className="truncate">System</span>
              </a>
            </nav>
          </div>

          {/* Content area */}
          <div className="md:col-span-2 py-6 px-4 sm:px-6 lg:px-8">
            <div id="profile">
              <div className="pb-6 border-b">
                <h2 className="text-lg font-medium text-gray-900 flex items-center">
                  <User className="mr-2 h-5 w-5 text-gray-500" />
                  Profile Settings
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Update your personal information and farm details.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="input"
                      defaultValue="John"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="input"
                      defaultValue="Farmer"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="input"
                      defaultValue="john.farmer@example.com"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="farm-name" className="block text-sm font-medium text-gray-700">
                    Farm name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="farm-name"
                      id="farm-name"
                      className="input"
                      defaultValue="Green Valley Farm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="farm-type" className="block text-sm font-medium text-gray-700">
                    Farm type
                  </label>
                  <div className="mt-1">
                    <select
                      id="farm-type"
                      name="farm-type"
                      className="select"
                      defaultValue="mixed"
                    >
                      <option value="crop">Crop Farm</option>
                      <option value="livestock">Livestock Farm</option>
                      <option value="mixed">Mixed Farm</option>
                      <option value="orchard">Orchard</option>
                      <option value="vineyard">Vineyard</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="farm-location" className="block text-sm font-medium text-gray-700">
                    Farm location
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="farm-location"
                      id="farm-location"
                      className="input"
                      defaultValue="1234 Rural Road, Farmington, CA 95230"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                    About
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="input"
                      defaultValue="Family-owned farm focused on sustainable practices and organic produce. Growing corn, wheat, and soybeans."
                    ></textarea>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description of your farm for the community.
                  </p>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="btn btn-outline mr-3"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            
            {/* Other settings sections would go here */}
          </div>
        </div>
      </div>

      {/* AI Data Integration */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold flex items-center">
            <SettingsIcon className="h-5 w-5 mr-2 text-primary-500" />
            AI Integration Settings
          </h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-6">
            Configure how AI analyzes your farm data and what insights are generated.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="ai-crop-monitoring"
                  name="ai-crop-monitoring"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  defaultChecked
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="ai-crop-monitoring" className="font-medium text-gray-700">
                  AI Crop Monitoring
                </label>
                <p className="text-gray-500">
                  Allow AI to analyze crop imagery and sensor data to detect diseases, pests, and growth anomalies.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="ai-weather"
                  name="ai-weather"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  defaultChecked
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="ai-weather" className="font-medium text-gray-700">
                  AI Weather Impact Analysis
                </label>
                <p className="text-gray-500">
                  Enable AI to assess how weather patterns will impact your specific crops and suggest preventative measures.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="ai-resource"
                  name="ai-resource"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  defaultChecked
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="ai-resource" className="font-medium text-gray-700">
                  AI Resource Optimization
                </label>
                <p className="text-gray-500">
                  Allow AI to optimize irrigation schedules, fertilizer application, and other resources based on crop needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="ai-yield"
                  name="ai-yield"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  defaultChecked
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="ai-yield" className="font-medium text-gray-700">
                  AI Yield Prediction
                </label>
                <p className="text-gray-500">
                  Enable AI to predict harvest yields based on current conditions, historical data, and growth patterns.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="data-sharing"
                  name="data-sharing"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="data-sharing" className="font-medium text-gray-700">
                  Anonymous Data Sharing
                </label>
                <p className="text-gray-500">
                  Share anonymized farm data to help improve AI models and contribute to agricultural research (no personal information is shared).
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-md font-medium text-gray-900 mb-4">Model Training Frequency</h3>
            <div className="mt-4">
              <select
                id="ai-training-frequency"
                name="ai-training-frequency"
                className="select"
                defaultValue="weekly"
              >
                <option value="daily">Daily (Best accuracy, higher resource usage)</option>
                <option value="weekly">Weekly (Recommended)</option>
                <option value="monthly">Monthly (Lower resource usage)</option>
                <option value="manual">Manual Only</option>
              </select>
            </div>
          </div>
          
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="btn btn-outline mr-3"
              >
                Reset to Defaults
              </button>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;