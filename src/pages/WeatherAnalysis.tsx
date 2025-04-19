import React from 'react';
import { Cloud, Droplets, Wind, Thermometer, CloudRain, Sun } from 'lucide-react';
import { Line } from 'react-chartjs-2';

const WeatherAnalysis: React.FC = () => {
  // Dummy data for temperature forecast
  const temperatureData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'High (°F)',
        data: [78, 76, 74, 75, 77, 79, 80],
        borderColor: '#ff7c43',
        backgroundColor: 'rgba(255, 124, 67, 0.1)',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Low (°F)',
        data: [62, 61, 60, 58, 61, 63, 65],
        borderColor: '#1f77b4',
        backgroundColor: 'rgba(31, 119, 180, 0.1)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // Dummy data for precipitation forecast
  const precipitationData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Precipitation (in)',
        data: [0, 0.1, 0.4, 0.2, 0, 0, 0.1],
        borderColor: '#4B86B4',
        backgroundColor: 'rgba(75, 134, 180, 0.4)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Weather Analysis</h1>
        <div className="mt-4 md:mt-0 flex items-center space-x-2">
          <span className="text-sm text-gray-500">Location: Farm HQ</span>
          <button className="btn btn-outline py-1.5">Change Location</button>
        </div>
      </div>

      {/* Current Weather */}
      <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl shadow-md overflow-hidden text-white">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center">
              <Sun className="h-16 w-16 mr-4" />
              <div>
                <h2 className="text-3xl font-bold">72°F</h2>
                <p className="text-lg">Sunny with light clouds</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 grid grid-cols-2 gap-x-10 gap-y-2">
              <div className="flex items-center">
                <Thermometer className="h-5 w-5 mr-2 text-white" />
                <span>Feels like: 74°F</span>
              </div>
              <div className="flex items-center">
                <Wind className="h-5 w-5 mr-2 text-white" />
                <span>Wind: 8 mph NW</span>
              </div>
              <div className="flex items-center">
                <Droplets className="h-5 w-5 mr-2 text-white" />
                <span>Humidity: 45%</span>
              </div>
              <div className="flex items-center">
                <CloudRain className="h-5 w-5 mr-2 text-white" />
                <span>Chance of rain: 5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-semibold flex items-center">
              <Thermometer className="h-5 w-5 mr-2 text-secondary-500" />
              Temperature Forecast (7 Days)
            </h2>
          </div>
          <div className="p-4 h-80">
            <Line 
              data={temperatureData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                  intersect: false,
                  mode: 'index',
                },
                scales: {
                  y: {
                    title: {
                      display: true,
                      text: 'Temperature (°F)'
                    }
                  }
                }
              }}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="font-semibold flex items-center">
              <CloudRain className="h-5 w-5 mr-2 text-secondary-500" />
              Precipitation Forecast (7 Days)
            </h2>
          </div>
          <div className="p-4 h-80">
            <Line 
              data={precipitationData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                  intersect: false,
                  mode: 'index',
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Precipitation (inches)'
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Weather Impact Analysis */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold flex items-center">
            <Cloud className="h-5 w-5 mr-2 text-secondary-500" />
            AI Weather Impact Analysis
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 bg-green-50 border-green-200">
              <h3 className="text-lg font-medium mb-2 text-green-800">Favorable Impact</h3>
              <p className="text-sm text-green-700 mb-2">The upcoming conditions are generally favorable for your crops.</p>
              <ul className="text-sm text-green-700 space-y-1 list-disc pl-5">
                <li>Optimal temperature range for corn growth</li>
                <li>Sufficient sunlight for photosynthesis</li>
                <li>Light rainfall beneficial for seedlings</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4 bg-yellow-50 border-yellow-200">
              <h3 className="text-lg font-medium mb-2 text-yellow-800">Watch Points</h3>
              <p className="text-sm text-yellow-700 mb-2">Some conditions may require monitoring:</p>
              <ul className="text-sm text-yellow-700 space-y-1 list-disc pl-5">
                <li>Brief dry period expected mid-week</li>
                <li>Consider adjusting irrigation for Field C</li>
                <li>Moderate winds may affect spray applications</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">AI Recommendations</h3>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 mr-2 text-xs">1</span>
                  <span>Delay scheduled pesticide application until after Wednesday's rain</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 mr-2 text-xs">2</span>
                  <span>Optimal planting window for fall crops begins on Sunday</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 mr-2 text-xs">3</span>
                  <span>Prepare irrigation system for potential mid-week dry conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAnalysis;