import React from 'react';
import { Droplets, Activity, BarChart2, LayoutList } from 'lucide-react';

const ResourceManagement: React.FC = () => {
  // Dummy data for resources
  const resources = [
    {
      id: 'water',
      name: 'Water Usage',
      current: 12450,
      unit: 'gallons',
      target: 15000,
      previousPeriod: 14200,
      change: -12.3,
      efficiency: 83,
    },
    {
      id: 'fertilizer',
      name: 'Fertilizer',
      current: 850,
      unit: 'lbs',
      target: 1000,
      previousPeriod: 950,
      change: -10.5,
      efficiency: 77,
    },
    {
      id: 'pesticides',
      name: 'Pesticides',
      current: 15,
      unit: 'gal',
      target: 25,
      previousPeriod: 22,
      change: -31.8,
      efficiency: 92,
    },
    {
      id: 'labor',
      name: 'Labor Hours',
      current: 120,
      unit: 'hrs',
      target: 150,
      previousPeriod: 145,
      change: -17.2,
      efficiency: 88,
    },
  ];

  // Dummy upcoming tasks
  const upcomingTasks = [
    {
      id: 't1',
      task: 'Irrigation system maintenance',
      date: '2025-06-08',
      priority: 'high',
      assignee: 'John D.',
    },
    {
      id: 't2',
      task: 'Apply fertilizer to Field C',
      date: '2025-06-10',
      priority: 'medium',
      assignee: 'Sarah M.',
    },
    {
      id: 't3',
      task: 'Install new water sensors',
      date: '2025-06-15',
      priority: 'medium',
      assignee: 'Alex T.',
    },
    {
      id: 't4',
      task: 'Schedule equipment maintenance',
      date: '2025-06-22',
      priority: 'low',
      assignee: 'Michael R.',
    },
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <span className="badge bg-error-100 text-error-800">High</span>;
      case 'medium':
        return <span className="badge bg-warning-100 text-warning-800">Medium</span>;
      default:
        return <span className="badge bg-gray-100 text-gray-800">Low</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Resource Management</h1>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
          <button className="btn btn-outline py-1.5 flex items-center">
            <BarChart2 className="h-4 w-4 mr-1.5" />
            Export Reports
          </button>
          <button className="btn btn-primary py-1.5 flex items-center">
            <Activity className="h-4 w-4 mr-1.5" />
            Optimize Resources
          </button>
        </div>
      </div>

      {/* Resource Usage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-900">{resource.name}</h3>
                <div className="flex items-center text-xs">
                  <span className={`flex items-center ${resource.change < 0 ? 'text-success-600' : 'text-error-600'}`}>
                    {resource.change < 0 ? '↓' : '↑'} {Math.abs(resource.change)}%
                  </span>
                  <span className="text-gray-500 ml-1">vs prev</span>
                </div>
              </div>
              
              <div className="flex items-end space-x-2">
                <div className="text-2xl font-bold">{resource.current.toLocaleString()}</div>
                <div className="text-sm text-gray-500 mb-1">{resource.unit}</div>
              </div>
              
              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Current usage</span>
                  <span>{Math.round((resource.current / resource.target) * 100)}% of target</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full"
                    style={{ width: `${Math.min(100, (resource.current / resource.target) * 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t">
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-600">Efficiency</div>
                  <div className="flex items-center">
                    <div className={`h-3 w-3 rounded-full mr-1 ${
                      resource.efficiency >= 80 ? 'bg-success-500' : 
                      resource.efficiency >= 60 ? 'bg-warning-500' : 'bg-error-500'
                    }`}></div>
                    <span className="text-sm font-medium">{resource.efficiency}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Smart Irrigation Management */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold flex items-center">
            <Droplets className="h-5 w-5 mr-2 text-secondary-500" />
            Smart Irrigation Management
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="font-medium mb-4">AI Water Optimization</h3>
              <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-200 mb-4">
                <p className="text-secondary-700 text-sm">
                  Our AI system has analyzed soil moisture levels, weather forecasts, and crop water needs to optimize your irrigation schedule. The recommended schedule below will save approximately 18% water while maintaining optimal crop growth.
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Field</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Next Irrigation</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Water Volume</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm">Field A - North</td>
                      <td className="px-4 py-3 text-sm">Today, 6:00 PM</td>
                      <td className="px-4 py-3 text-sm">45 min</td>
                      <td className="px-4 py-3 text-sm">2,450 gal</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Field B - Central</td>
                      <td className="px-4 py-3 text-sm">Tomorrow, 6:00 AM</td>
                      <td className="px-4 py-3 text-sm">30 min</td>
                      <td className="px-4 py-3 text-sm">1,800 gal</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Field C - South</td>
                      <td className="px-4 py-3 text-sm">Jun 10, 6:00 AM</td>
                      <td className="px-4 py-3 text-sm">60 min</td>
                      <td className="px-4 py-3 text-sm">3,200 gal</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Field D - East</td>
                      <td className="px-4 py-3 text-sm">Jun 8, 6:00 PM</td>
                      <td className="px-4 py-3 text-sm">40 min</td>
                      <td className="px-4 py-3 text-sm">2,100 gal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-secondary-50 to-white rounded-lg border border-secondary-100 p-4">
              <h3 className="font-medium mb-3 text-secondary-800">System Status</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Main Pump</span>
                  <span className="badge badge-success">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Zone A Valves</span>
                  <span className="badge badge-success">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Zone B Valves</span>
                  <span className="badge badge-success">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Zone C Valves</span>
                  <span className="badge badge-warning">Maintenance</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Soil Moisture Sensors</span>
                  <span className="badge badge-success">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Weather Station</span>
                  <span className="badge badge-success">Online</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2 text-secondary-800">Water Sources</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Main Reservoir</span>
                      <span>82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Rainwater Collection</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Management */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold flex items-center">
            <LayoutList className="h-5 w-5 mr-2 text-earth-500" />
            Resource-Related Tasks
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {upcomingTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {task.task}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {getPriorityBadge(task.priority)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.assignee}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      Edit
                    </button>
                    <button className="text-error-600 hover:text-error-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t text-center">
          <button className="btn btn-outline py-1.5">
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceManagement;