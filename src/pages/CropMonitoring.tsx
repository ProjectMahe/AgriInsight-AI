import React from 'react';
import { Plane as Plant, AlertTriangle, Camera, TrendingUp, FilePlus } from 'lucide-react';

const CropMonitoring: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Crop Monitoring</h1>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
          <button className="btn btn-outline py-1.5 flex items-center">
            <Camera className="h-4 w-4 mr-1.5" />
            Scan Field
          </button>
          <button className="btn btn-primary py-1.5 flex items-center">
            <FilePlus className="h-4 w-4 mr-1.5" />
            New Analysis
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Crop Health Overview</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">This section will contain AI-powered crop monitoring features including disease detection, growth tracking, and yield predictions.</p>
          <div className="bg-primary-50 p-4 rounded-lg border border-primary-200 text-primary-700">
            <p className="flex items-center">
              <Plant className="h-5 w-5 mr-2 text-primary-600" />
              Please upload images or connect your field sensors to enable AI analysis
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Coming Soon: Advanced Crop Monitoring Features</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-lg font-medium mb-2">
                <Plant className="h-5 w-5 mr-2 text-primary-500" />
                Disease Detection
              </h3>
              <p className="text-gray-600">AI-powered early detection of crop diseases from images or sensor data.</p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-lg font-medium mb-2">
                <TrendingUp className="h-5 w-5 mr-2 text-secondary-500" />
                Growth Tracking
              </h3>
              <p className="text-gray-600">Monitor crop development stages and compare with historical data.</p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-lg font-medium mb-2">
                <Camera className="h-5 w-5 mr-2 text-earth-500" />
                Drone Integration
              </h3>
              <p className="text-gray-600">Connect with drone imagery for comprehensive field analysis and mapping.</p>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-lg font-medium mb-2">
                <AlertTriangle className="h-5 w-5 mr-2 text-warning-500" />
                Pest Prediction
              </h3>
              <p className="text-gray-600">Predictive analytics for pest outbreaks based on weather and historical patterns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropMonitoring;