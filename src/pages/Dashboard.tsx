import React from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
import { AlertTriangle, Droplets, Plane as Plant, Sun, Thermometer, Leaf, TrendingUp, Cloud } from 'lucide-react';
import WeatherWidget from '../components/dashboard/WeatherWidget';
import AlertsWidget from '../components/dashboard/AlertsWidget';
import CropStatusCard from '../components/dashboard/CropStatusCard';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement);

const Dashboard: React.FC = () => {
  // Dummy data for charts
  const yieldData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Current Year',
        data: [0, 0, 5, 15, 25, 40, 60, 75, 90, 100, 110, 120],
        borderColor: '#3A8250',
        backgroundColor: 'rgba(58, 130, 80, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Previous Year',
        data: [0, 0, 3, 10, 20, 35, 55, 65, 80, 90, 100, 105],
        borderColor: '#4B86B4',
        backgroundColor: 'rgba(75, 134, 180, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const resourceUsageData = {
    labels: ['Water', 'Fertilizer', 'Pesticides', 'Labor'],
    datasets: [
      {
        label: 'Usage Efficiency',
        data: [75, 82, 65, 90],
        backgroundColor: [
          'rgba(58, 130, 80, 0.6)',
          'rgba(75, 134, 180, 0.6)',
          'rgba(139, 90, 43, 0.6)',
          'rgba(76, 208, 152, 0.6)',
        ],
        borderColor: [
          'rgba(58, 130, 80, 1)',
          'rgba(75, 134, 180, 1)',
          'rgba(139, 90, 43, 1)',
          'rgba(42, 157, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const soilHealthData = {
    labels: ['Field A', 'Field B', 'Field C', 'Field D'],
    datasets: [
      {
        label: 'Nitrogen',
        data: [65, 75, 40, 80],
        backgroundColor: 'rgba(58, 130, 80, 0.6)',
      },
      {
        label: 'Phosphorus',
        data: [50, 60, 70, 55],
        backgroundColor: 'rgba(75, 134, 180, 0.6)',
      },
      {
        label: 'Potassium',
        data: [80, 45, 60, 70],
        backgroundColor: 'rgba(139, 90, 43, 0.6)',
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Last updated: Today, 10:30 AM</span>
          <button className="btn btn-outline py-1 px-3 text-sm">Refresh</button>
        </div>
      </div>

      {/* Status Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4 bg-gradient-to-br from-primary-50 to-primary-100 border-l-4 border-primary-500">
          <div className="flex items-center">
            <div className="rounded-full bg-primary-500/10 p-3 mr-4">
              <Plant className="h-6 w-6 text-primary-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-700">Crop Health</p>
              <p className="text-xl font-bold text-primary-900">92%</p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <TrendingUp className="h-4 w-4 text-success-500 mr-1" />
            <span className="text-success-700">5% increase</span>
            <span className="text-gray-500 ml-1">from last week</span>
          </div>
        </div>

        <div className="card p-4 bg-gradient-to-br from-secondary-50 to-secondary-100 border-l-4 border-secondary-500">
          <div className="flex items-center">
            <div className="rounded-full bg-secondary-500/10 p-3 mr-4">
              <Cloud className="h-6 w-6 text-secondary-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-secondary-700">Weather Risk</p>
              <p className="text-xl font-bold text-secondary-900">Low</p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-gray-500">Favorable conditions for next 5 days</span>
          </div>
        </div>

        <div className="card p-4 bg-gradient-to-br from-success-50 to-success-100 border-l-4 border-success-500">
          <div className="flex items-center">
            <div className="rounded-full bg-success-500/10 p-3 mr-4">
              <Droplets className="h-6 w-6 text-success-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-success-700">Water Usage</p>
              <p className="text-xl font-bold text-success-900">12,450 gal</p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <TrendingUp className="h-4 w-4 text-success-500 mr-1" />
            <span className="text-success-700">18% saved</span>
            <span className="text-gray-500 ml-1">vs. traditional methods</span>
          </div>
        </div>

        <div className="card p-4 bg-gradient-to-br from-warning-50 to-warning-100 border-l-4 border-warning-500">
          <div className="flex items-center">
            <div className="rounded-full bg-warning-500/10 p-3 mr-4">
              <AlertTriangle className="h-6 w-6 text-warning-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-warning-700">Alerts</p>
              <p className="text-xl font-bold text-warning-900">3 Active</p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-warning-700">2 low priority, 1 medium</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Crop Status */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="p-4 border-b">
              <h2 className="font-semibold text-lg">Crop Status</h2>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <CropStatusCard 
                cropName="Corn"
                status="Excellent"
                statusColor="success"
                progress={85}
                icon={Leaf}
                details={{
                  growthStage: "Flowering",
                  plantedArea: "45 acres",
                  predictedYield: "8.2 tons/acre",
                  harvestDate: "Est. Oct 15"
                }}
              />
              <CropStatusCard 
                cropName="Wheat" 
                status="Good"
                statusColor="primary"
                progress={72}
                icon={Leaf}
                details={{
                  growthStage: "Grain filling",
                  plantedArea: "30 acres",
                  predictedYield: "4.5 tons/acre",
                  harvestDate: "Est. Sep 10"
                }}
              />
              <CropStatusCard 
                cropName="Soybeans" 
                status="Good"
                statusColor="primary"
                progress={68}
                icon={Leaf}
                details={{
                  growthStage: "Vegetative",
                  plantedArea: "25 acres",
                  predictedYield: "3.8 tons/acre",
                  harvestDate: "Est. Nov 5"
                }}
              />
              <CropStatusCard 
                cropName="Tomatoes" 
                status="Attention"
                statusColor="warning"
                progress={45}
                icon={Leaf}
                details={{
                  growthStage: "Fruiting",
                  plantedArea: "10 acres",
                  predictedYield: "25 tons/acre",
                  harvestDate: "Est. Aug 30"
                }}
              />
            </div>
          </div>
        </div>

        {/* Weather and Alerts */}
        <div className="space-y-6">
          <WeatherWidget />
          <AlertsWidget />
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-4">
          <h2 className="font-semibold text-lg mb-4">Yield Projection</h2>
          <Line 
            data={yieldData} 
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
                    text: 'Yield (bushels/acre)'
                  }
                }
              }
            }}
            height={250}
          />
        </div>

        <div className="card p-4">
          <h2 className="font-semibold text-lg mb-4">Resource Efficiency</h2>
          <div className="h-[250px] flex items-center justify-center">
            <Doughnut 
              data={resourceUsageData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        return `${context.label}: ${context.raw}% efficient`;
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Soil Health Chart */}
      <div className="card p-4">
        <h2 className="font-semibold text-lg mb-4">Soil Nutrient Analysis</h2>
        <Bar 
          data={soilHealthData} 
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
          height={250}
        />
      </div>
    </div>
  );
};

export default Dashboard;