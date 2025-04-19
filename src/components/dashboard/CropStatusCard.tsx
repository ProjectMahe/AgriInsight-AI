import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CropDetails {
  growthStage: string;
  plantedArea: string;
  predictedYield: string;
  harvestDate: string;
}

interface CropStatusCardProps {
  cropName: string;
  status: string;
  statusColor: 'success' | 'primary' | 'warning' | 'error';
  progress: number;
  icon: LucideIcon;
  details: CropDetails;
}

const CropStatusCard: React.FC<CropStatusCardProps> = ({
  cropName,
  status,
  statusColor,
  progress,
  icon: Icon,
  details,
}) => {
  const getStatusColor = () => {
    switch (statusColor) {
      case 'success':
        return 'bg-success-500';
      case 'primary':
        return 'bg-primary-500';
      case 'warning':
        return 'bg-warning-500';
      case 'error':
        return 'bg-error-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getBadgeColor = () => {
    switch (statusColor) {
      case 'success':
        return 'bg-success-100 text-success-800';
      case 'primary':
        return 'bg-primary-100 text-primary-800';
      case 'warning':
        return 'bg-warning-100 text-warning-800';
      case 'error':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm hover:shadow transition-shadow">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className={`${getStatusColor()} p-2 rounded-lg mr-3`}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-medium">{cropName}</h3>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${getBadgeColor()}`}>
            {status}
          </span>
        </div>

        <div className="mt-4 mb-2">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Growth Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`${getStatusColor()} h-2 rounded-full`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-gray-500">Growth Stage</p>
            <p className="font-medium">{details.growthStage}</p>
          </div>
          <div>
            <p className="text-gray-500">Planted Area</p>
            <p className="font-medium">{details.plantedArea}</p>
          </div>
          <div>
            <p className="text-gray-500">Predicted Yield</p>
            <p className="font-medium">{details.predictedYield}</p>
          </div>
          <div>
            <p className="text-gray-500">Harvest Date</p>
            <p className="font-medium">{details.harvestDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropStatusCard;