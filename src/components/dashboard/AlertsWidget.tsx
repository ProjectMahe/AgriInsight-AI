import React from 'react';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

interface Alert {
  id: string;
  title: string;
  description: string;
  type: 'low' | 'medium' | 'high';
  time: string;
}

const AlertsWidget: React.FC = () => {
  // In a real app, these would come from an API
  const alerts: Alert[] = [
    {
      id: 'a1',
      title: 'Potential pest detection',
      description: 'AI detected possible aphid infestation in Field B, section 3.',
      type: 'medium',
      time: '2 hours ago',
    },
    {
      id: 'a2',
      title: 'Irrigation system alert',
      description: 'Zone 4 showing lower water pressure than expected.',
      type: 'low',
      time: '5 hours ago',
    },
    {
      id: 'a3',
      title: 'Weather alert',
      description: 'Heavy rain forecasted for Thursday. Consider adjusting irrigation schedule.',
      type: 'low',
      time: '1 day ago',
    },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'high':
        return <AlertCircle className="h-5 w-5 text-error-500" />;
      case 'medium':
        return <AlertTriangle className="h-5 w-5 text-warning-500" />;
      default:
        return <Info className="h-5 w-5 text-secondary-500" />;
    }
  };

  return (
    <div className="card">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Recent Alerts</h3>
      </div>
      <div className="divide-y">
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div key={alert.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5 mr-3">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className="font-medium text-sm text-gray-900">{alert.title}</p>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No alerts at this time</div>
        )}
      </div>
      <div className="p-2 border-t text-center">
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View all alerts
        </button>
      </div>
    </div>
  );
};

export default AlertsWidget;