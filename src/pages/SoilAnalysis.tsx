import React from 'react';
import { FlaskRound as Flask, Map, LineChart, Upload } from 'lucide-react';
import { Bar } from 'react-chartjs-2';

const SoilAnalysis: React.FC = () => {
  // Dummy data for soil nutrients
  const soilNutrientData = {
    labels: ['Field A', 'Field B', 'Field C', 'Field D'],
    datasets: [
      {
        label: 'Nitrogen (N)',
        data: [65, 45, 80, 60],
        backgroundColor: 'rgba(58, 130, 80, 0.7)',
      },
      {
        label: 'Phosphorus (P)',
        data: [55, 70, 45, 75],
        backgroundColor: 'rgba(75, 134, 180, 0.7)',
      },
      {
        label: 'Potassium (K)',
        data: [70, 60, 50, 85],
        backgroundColor: 'rgba(139, 90, 43, 0.7)',
      },
    ],
  };

  // Dummy soil analysis data
  const soilSamples = [
    {
      id: 'soil-1',
      field: 'Field A - North Section',
      date: '2025-06-02',
      status: 'Analyzed',
      ph: 6.8,
      texture: 'Silty Loam',
      organicMatter: '4.2%',
      issues: null,
    },
    {
      id: 'soil-2',
      field: 'Field B - Central',
      date: '2025-06-01',
      status: 'Analyzed',
      ph: 5.9,
      texture: 'Clay Loam',
      organicMatter: '3.5%',
      issues: 'Low pH, Apply limestone',
    },
    {
      id: 'soil-3',
      field: 'Field C - South',
      date: '2025-05-28',
      status: 'Analyzed',
      ph: 7.2,
      texture: 'Sandy Loam',
      organicMatter: '2.8%',
      issues: 'Low organic matter',
    },
    {
      id: 'soil-4',
      field: 'Field D - East Section',
      date: '2025-05-25',
      status: 'Analyzed',
      ph: 7.1,
      texture: 'Loam',
      organicMatter: '4.8%',
      issues: null,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Soil Analysis</h1>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
          <button className="btn btn-outline py-1.5 flex items-center">
            <Upload className="h-4 w-4 mr-1.5" />
            Upload Data
          </button>
          <button className="btn btn-primary py-1.5 flex items-center">
            <Flask className="h-4 w-4 mr-1.5" />
            New Analysis
          </button>
        </div>
      </div>

      {/* Soil Health Overview */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold flex items-center">
            <LineChart className="h-5 w-5 mr-2 text-earth-500" />
            Soil Nutrient Analysis
          </h2>
        </div>
        <div className="p-6 h-80">
          <Bar 
            data={soilNutrientData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  title: {
                    display: true,
                    text: 'Nutrient Levels (%)'
                  }
                }
              },
              plugins: {
                legend: {
                  position: 'bottom',
                },
              }
            }}
          />
        </div>
      </div>

      {/* Soil Sample Analysis Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold flex items-center">
            <Flask className="h-5 w-5 mr-2 text-earth-500" />
            Recent Soil Samples
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Field Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Collected
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  pH Level
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Soil Texture
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organic Matter
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issues & Recommendations
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {soilSamples.map((sample) => (
                <tr key={sample.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {sample.field}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sample.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sample.ph}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sample.texture}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sample.organicMatter}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {sample.issues ? (
                      <span className="text-warning-600">{sample.issues}</span>
                    ) : (
                      <span className="text-success-600">No issues detected</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold">AI-Powered Soil Management Recommendations</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Field-Specific Recommendations</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-primary-50 border-primary-200">
                  <h4 className="font-medium text-primary-800">Field B - Action Required</h4>
                  <p className="mt-1 text-sm text-primary-700">
                    Soil pH is below optimal range (5.9). Apply 1.5 tons of limestone per acre to increase pH to desired range (6.2-6.8) for optimal nutrient availability.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg bg-yellow-50 border-yellow-200">
                  <h4 className="font-medium text-yellow-800">Field C - Moderate Attention</h4>
                  <p className="mt-1 text-sm text-yellow-700">
                    Organic matter is lower than optimal. Consider cover cropping and incorporating organic amendments to improve soil structure and fertility.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                  <h4 className="font-medium text-green-800">Fields A & D - Maintaining</h4>
                  <p className="mt-1 text-sm text-green-700">
                    Soil parameters are within optimal ranges. Continue current soil management practices and regular testing.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Fertilizer Optimization Plan</h3>
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-gray-600 mb-4">
                  Based on AI analysis of soil tests, crop requirements, and environmental factors, we recommend the following custom fertilization plan:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-500 mt-0.5"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Field A - North Section</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Apply balanced NPK (10-10-10) at 400 lbs/acre
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-secondary-500 mt-0.5"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Field B - Central</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Apply high-phosphorus fertilizer (10-20-10) at 350 lbs/acre
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-earth-500 mt-0.5"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Field C - South</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Apply nitrogen-rich organic fertilizer at 500 lbs/acre
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-success-500 mt-0.5"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Field D - East Section</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Apply balanced NPK (14-14-14) at 375 lbs/acre
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soil Mapping */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold flex items-center">
            <Map className="h-5 w-5 mr-2 text-earth-500" />
            Soil Mapping (Coming Soon)
          </h2>
        </div>
        <div className="p-6">
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Map className="h-12 w-12 mx-auto text-gray-400 mb-3" />
            <h3 className="text-lg font-medium text-gray-700">Advanced Soil Mapping</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-lg mx-auto">
              Coming soon: Detailed soil mapping with AI-powered zoning recommendations for variable rate applications based on soil type, texture, and nutrient levels.
            </p>
            <button className="mt-4 btn btn-outline py-1.5">
              Get notified when available
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilAnalysis;